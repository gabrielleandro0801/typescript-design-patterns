import { BankingAccountWithdrawalProcessor, Result } from "./BankingAccountWithdrawalProcessor";

/**
 * Esta é a implementação para contas corrente.
 *
 * O limite de uma transação para contas corrente é de até R$1000 a mais que o saldo,
 * que é o máximo que ela pode ficar negativada.
 *
 * A taxa da transação é de 5% do seu valor.
 */
export class CheckingAccountWithdrawal extends BankingAccountWithdrawalProcessor {
    protected checkAccountLimits(amount: number): Result<Error, boolean> {
        console.log(`O limite de transação para uma conta corrente é de até R$1000 a mais que o saldo`);

        return { status: "success", value: amount <= this._balance + 1000 };
    }

    protected calculateFees(amount: number): Result<Error, number> {
        console.log(`A taxa de transação para uma conta corrente é de 5% do valor da transação`);

        return { status: "success", value: amount * 0.05 };
    }
}
