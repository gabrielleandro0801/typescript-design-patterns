export type Result<E, S> =
    | {
          status: "error";
          error: E;
      }
    | {
          status: "success";
          value: S;
      };

/**
 * Este é o **template** para saques de contas bancárias.
 *
 * O método **process** é a implementação base e pública que será exposta.
 *
 * Os métodos abstratos são aqueles que as implementações concretas devem implementar
 * a sua maneira.
 *
 * Os métodos privados que possuem suas implementações já criadas são comuns para todos
 * os tipos de conta.
 */
export abstract class BankingAccountWithdrawalProcessor {
    protected _balance: number;

    constructor(balance: number) {
        this._balance = balance;
    }

    process(amount: number): Result<Error, boolean> {
        const limits: Result<Error, boolean> = this.checkAccountLimits(amount);
        if (limits.status === "error" || (limits.status === "success" && !limits.value)) {
            return limits;
        }

        const fees: Result<Error, number> = this.calculateFees(amount);
        if (fees.status === "error") {
            return fees;
        }

        const totalAmount: number = amount + fees.value;

        const balanceEnough = this.isBalanceEnough(totalAmount);
        if (balanceEnough.status === "error" || (balanceEnough.status === "success" && !balanceEnough.value)) {
            return balanceEnough;
        }

        const debit: Result<Error, void> = this.debit(totalAmount);
        if (debit.status === "error") {
            return debit;
        }

        return { status: "success", value: null };
    }

    protected abstract checkAccountLimits(amount: number): Result<Error, boolean>;
    protected abstract calculateFees(amount: number): Result<Error, number>;

    private isBalanceEnough(totalAmount: number): Result<Error, boolean> {
        return this._balance >= totalAmount ? { status: "success", value: true } : { status: "success", value: false };
    }

    private debit(amount: number): Result<Error, void> {
        console.log(`Debitando R$${amount} do saldo`);
        this._balance -= amount;

        return { status: "success", value: null };
    }
}
