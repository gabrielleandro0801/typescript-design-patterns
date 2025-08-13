import { BankAccount, BankAccountType } from "./domain/BankAccount";
import { IMonthlyFeeStrategy } from "./domain/IMonthlyFeeStrategy";
import {
    BankAccountMonthlyFeeStrategy,
    CheckingAccountFeeStrategy,
    PayrollAccountFeeStrategy,
    SavingAccountFeeStrategy,
} from "./domain/MonthlyFeeStrategy";

/**
 * Cada uma das instâncias de BankAccount possui um tipo diferente, acarretando em diferentes
 * modos de cálculo de mensalidade.
 *
 * O modo será escolhido dentro do método [calculate] da [IMonthlyFeeStrategy].
 */
function main() {
    const firstBankAccount: BankAccount = new BankAccount();
    firstBankAccount.type = BankAccountType.CHECKING;
    firstBankAccount.salary = 10;

    const secondBankAccount: BankAccount = new BankAccount();
    secondBankAccount.type = BankAccountType.SAVING;
    secondBankAccount.salary = 10;

    const thirdBankAccount: BankAccount = new BankAccount();
    thirdBankAccount.type = BankAccountType.PAYROLL;
    thirdBankAccount.salary = 10;

    const monthlyFeeStrategy: IMonthlyFeeStrategy = getMonthlyFeeStrategy();

    for (const bankAccount of [firstBankAccount, secondBankAccount, thirdBankAccount]) {
        const fee: number = monthlyFeeStrategy.calculate(bankAccount);

        console.log(`A mensalidade para esta conta do tipo ${bankAccount.type} é de R$${fee}`);
    }
}

function getMonthlyFeeStrategy(): IMonthlyFeeStrategy {
    return new BankAccountMonthlyFeeStrategy(
        new CheckingAccountFeeStrategy(),
        new SavingAccountFeeStrategy(),
        new PayrollAccountFeeStrategy(),
    );
}

(() => {
    main();
})();
