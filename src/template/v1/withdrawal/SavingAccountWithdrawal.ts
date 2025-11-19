import { BankingAccountWithdrawalProcessor, Result } from "./BankingAccountWithdrawalProcessor";

/**
 * Esta é a implementação para contas poupança.
 *
 * O limite de uma transação para contas poupança é o próprio saldo da conta,
 * pois ela não pode ficar negativada.
 *
 * A taxa da transação é de R$0.
 */
export class SavingAccountWithdrawal extends BankingAccountWithdrawalProcessor {
    protected checkAccountLimits(amount: number): Result<Error, boolean> {
        console.log(`O limite de transação para uma conta poupança é o próprio saldo da conta`);

        return { status: "success", value: amount <= this._balance };
    }

    protected calculateFees(amount: number): Result<Error, number> {
        console.log(`A taxa de transação para uma conta poupança é de R$0`);

        return { status: "success", value: 0 };
    }
}
