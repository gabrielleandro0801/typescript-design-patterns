import { BankAccount } from "../entities/BankAccount";

/**
 * Esta é a interface do Observer (observador).
 *
 * Aqueles que desejarem observar um determinado evento de conta bancária deverá
 * implementar esta interface.
 */
export interface IObserver {
    update(account: BankAccount, amount: number): Promise<void>;
}
