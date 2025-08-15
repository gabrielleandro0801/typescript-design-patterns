import { randomUUID, UUID } from "node:crypto";
import { BankAccount } from "../BankAccount";

/**
 * Essa classe é responsável pela criação da chave Pix aleatória através
 * das APIs e serviços necessários.
 */
export class PixService {
    async createRandomPixKey(bankAccount: BankAccount): Promise<void> {
        const randomPixKey: UUID = randomUUID();
        console.log(`Creating random Pix key [${randomPixKey}] for bankAccount [${bankAccount.number}]`);
    }
}
