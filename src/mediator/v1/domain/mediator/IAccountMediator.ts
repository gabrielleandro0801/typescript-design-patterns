import { BankAccount } from "../BankAccount";

/**
 * Esta é a interface do mediador. O domínio só conhecerá ela, encapsulando os serviços
 * que serão invocados (e sua orquestração).
 */
export interface IAccountMediator {
    onAccountCreated(bankAccount: BankAccount): Promise<void>;
}
