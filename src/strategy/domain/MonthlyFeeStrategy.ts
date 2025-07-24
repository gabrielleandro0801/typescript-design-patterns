import { BankAccount, BankAccountType } from "./BankAccount";
import { IMonthlyFeeStrategy } from "./IMonthlyFeeStrategy";

/**
 * Esta é a classe principal, que contém a estratégia de cálculo de mensalidade
 * para as contas bancárias.
 *
 * Através de seu método [calculate] ele determina qual será a estratégia de
 * cálculo adequada para a conta.
 * Com isso, utiliza a instância adequada.
 */
export class BankAccountMonthlyFeeStrategy implements IMonthlyFeeStrategy {
    private readonly checkingAccountFeeStrategy: IMonthlyFeeStrategy;
    private readonly savingAccountFeeStrategy: IMonthlyFeeStrategy;
    private readonly payrollAccountFeeStrategy: IMonthlyFeeStrategy;

    constructor(
        checkingAccountFeeStrategy: IMonthlyFeeStrategy,
        savingAccountFeeStrategy: IMonthlyFeeStrategy,
        payrollAccountFeeStrategy: IMonthlyFeeStrategy,
    ) {
        this.checkingAccountFeeStrategy = checkingAccountFeeStrategy;
        this.savingAccountFeeStrategy = savingAccountFeeStrategy;
        this.payrollAccountFeeStrategy = payrollAccountFeeStrategy;
    }

    calculate(bankAccount: BankAccount): number {
        const calculators: Map<BankAccountType, IMonthlyFeeStrategy> = new Map([
            [BankAccountType.CHECKING, this.checkingAccountFeeStrategy],
            [BankAccountType.SAVING, this.savingAccountFeeStrategy],
            [BankAccountType.PAYROLL, this.payrollAccountFeeStrategy],
        ]);

        const calculator: IMonthlyFeeStrategy = calculators.get(bankAccount.type);

        if (!calculator) {
            throw new Error(`Unable to calculate monthly fee for type ${bankAccount.type}`);
        }

        return calculator.calculate(bankAccount);
    }
}

/**
 * Contas corrente (CHECKING) possuem uma cobrança mensal fixa em 10 reais.
 */
export class CheckingAccountFeeStrategy implements IMonthlyFeeStrategy {
    calculate(bankAccount: BankAccount): number {
        return 10;
    }
}

/**
 * Contas poupança (SAVING) não possuem cobrança mensal.
 */
export class SavingAccountFeeStrategy implements IMonthlyFeeStrategy {
    calculate(bankAccount: BankAccount): number {
        return 0;
    }
}

/**
 * Contas salário (PAYROLL) possuem uma cobrança mensal de 1% do salário.
 */
export class PayrollAccountFeeStrategy implements IMonthlyFeeStrategy {
    calculate(bankAccount: BankAccount): number {
        return bankAccount.salary * 0.01;
    }
}
