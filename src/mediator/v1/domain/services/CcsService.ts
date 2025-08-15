import { BankAccount } from "../BankAccount";

/**
 * Essa classe é responsável pela notificação da abertura de conta
 * ao serviço CCS do Banco Central através das APIs e serviços necessários.
 */
export class CcsService {
    async reportOpening(bankAccount: BankAccount): Promise<void> {
        console.log(`Reporting opening of account [${bankAccount.number}] to the Central Bank`);
    }
}
