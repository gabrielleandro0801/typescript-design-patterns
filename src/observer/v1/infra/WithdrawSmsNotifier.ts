import { BankAccount } from "../domain/entities/BankAccount";
import { IObserver } from "../domain/observer/IObserver";

/**
 * Esta é uma implementação concreta da interface IObserver (do observador).
 *
 * Esta classe tem apenas o intuito de enviar emails para o portador quando
 * saques acontecerem.
 */
export class WithdrawSmsNotifier implements IObserver {
    async update(account: BankAccount, amount: number): Promise<void> {
        console.log(`📧 [SMS] Sending SMS to the owner of account ${account.number} about the withdraw of R$${amount}`);
    }
}
