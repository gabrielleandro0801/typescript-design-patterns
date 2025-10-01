import { BankAccount } from "./domain/entities/BankAccount";
import { IObserver } from "./domain/observer/IObserver";
import { BankAccountService } from "./domain/services/BankAccountService";
import { DepositEmailNotifier } from "./infra/DepositEmailNotifier";
import { WithdrawSmsNotifier } from "./infra/WithdrawSmsNotifier";

async function main() {
    const emailNotifier: IObserver = new DepositEmailNotifier();
    const smsNotifier: IObserver = new WithdrawSmsNotifier();

    const bankAccountService: BankAccountService = new BankAccountService();
    bankAccountService.subscribe("deposit", emailNotifier);
    bankAccountService.subscribe("withdraw", smsNotifier);

    const bankAccount: BankAccount = new BankAccount("123456", "0001", 10);

    await bankAccountService.deposit(bankAccount, 20);
    await bankAccountService.withdraw(bankAccount, 5);
}

(async () => {
    await main();
})();
