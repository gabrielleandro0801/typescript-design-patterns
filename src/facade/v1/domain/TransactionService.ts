import { randomUUID } from "node:crypto";
import { AwsFacade } from "../infra/AwsFacade";

export type Transaction = { id: string; amount: number; timestamp: string };

export class TransactionService {
    private readonly awsFacade: AwsFacade;

    constructor(awsFacade: AwsFacade) {
        this.awsFacade = awsFacade;
    }

    /**
     * Este método, ao criar a transação, não se preocupa com a implementação das
     * ações desejadas, pois a fachada da AWS as encapsula.
     */
    async create(amount: number): Promise<Transaction> {
        const transaction: Transaction = {
            id: randomUUID(),
            amount,
            timestamp: new Date().toISOString(),
        };

        console.log(`Transação de id ${transaction.id} criada com sucesso`);

        await this.awsFacade.saveTransaction(transaction);
        await this.awsFacade.generateReceipt(transaction);
        await this.awsFacade.notifyTransaction(transaction);

        return transaction;
    }
}
