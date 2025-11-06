import { BankAccount } from "../BankAccount";
import { IBankAccountState, Result, States } from "./IBankAccountState";

/**
 * Esse é o estado ativo. Ele permite a operação total da conta, ou seja, saques
 * e depósitos.
 *
 * Se um saque deixar a conta zerada ele muda o estado da conta para Bloqueada (BlockedState)
 */
export class ActiveState implements IBankAccountState {
    private readonly _name: States = "ACTIVE";
    private readonly _bankAccount: BankAccount;

    constructor(bankAccount: BankAccount) {
        this._bankAccount = bankAccount;
    }

    get name() {
        return this._name;
    }

    deposit(amount: number): Result<Error, number> {
        this._bankAccount.balance = this._bankAccount.balance + amount;

        return { status: "success", value: amount };
    }

    withdraw(amount: number): Result<Error, number> {
        if (this._bankAccount.balance >= amount) {
            this._bankAccount.balance = this._bankAccount.balance - amount;

            if (this._bankAccount.balance === 0) {
                this._bankAccount.state = new BlockedState(this._bankAccount);
            }

            return { status: "success", value: amount };
        }

        return { status: "error", error: new Error("Quantia solicitada maior que o saldo") };
    }
}

/**
 * Esse é o estado bloqueado. Ele permite a operação parcial da conta, ou seja, apenas depósitos.
 *
 * Apenas quando a conta atingir mais de R$100 de saldo ela muda para o estado ativo.
 */
export class BlockedState implements IBankAccountState {
    private readonly _name: States = "BLOCKED";
    private readonly _bankAccount: BankAccount;

    constructor(bankAccount: BankAccount) {
        this._bankAccount = bankAccount;
    }

    get name() {
        return this._name;
    }

    deposit(amount: number): Result<Error, number> {
        this._bankAccount.balance = this._bankAccount.balance + amount;

        if (this._bankAccount.balance >= 100) {
            this._bankAccount.state = new ActiveState(this._bankAccount);
        }

        return { status: "success", value: amount };
    }

    withdraw(amount: number): Result<Error, null> {
        return { status: "error", error: new Error("Conta bloqueada") };
    }
}

/**
 * Esse é o estado cancelado. Ele é o estado final da conta e não permite nenhuma operação.
 */
export class ClosedState implements IBankAccountState {
    private readonly _name: States = "CLOSED";
    private readonly _bankAccount: BankAccount;

    constructor(bankAccount: BankAccount) {
        this._bankAccount = bankAccount;
    }

    get name() {
        return this._name;
    }

    deposit(amount: number): Result<Error, null> {
        return { status: "error", error: new Error("Conta cancelada") };
    }

    withdraw(amount: number): Result<Error, null> {
        return { status: "error", error: new Error("Conta cancelada") };
    }
}
