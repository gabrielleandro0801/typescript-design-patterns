import { IBankAccountState, Result } from "./states/IBankAccountState";
import { ActiveState, ClosedState } from "./states/States";

/**
 * Esta é apenas uma classe simples representando uma conta bancária.
 *
 * Esta conta pode possuir vários estados, como Ativa, Bloqueada e Cancelada.
 * Cada um desses estados implementa o mesmo contrato (IBankAccountState) e cada um deles
 * possui suas maneiras de realizar essas operações de depósito e saque.
 */
export class BankAccount {
    private _state: IBankAccountState;
    private _balance: number;

    constructor() {
        this._balance = 0;
        this._state = new ActiveState(this);
    }

    get balance() {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    /**
     * Este é o setter do estado da conta bancária.
     *
     * A regra aplicada não permite a mudança de estado quando ela é cancelada.
     */
    set state(state: IBankAccountState) {
        if (this._state.name !== "CLOSED") {
            this._state = state;
            console.log(`Agora o estado da conta é ${this.getCurrentState()}`);
        }
    }

    getCurrentState(): string {
        return this._state.name;
    }

    /**
     * Este é o método para realizar o cancelamento da conta bancária.
     * Ele aplica explicitamente o estado ClosedState.
     */
    close(): void {
        this.state = new ClosedState(this);
    }

    /**
     * Este é o método de realizar depósito na conta bancária.
     * Porém, ele não realiza a operação de fato, mas ele a delega para o estado atual
     * realizá-la.
     */
    deposit(amount: number): Result<Error, unknown> {
        const result: Result<Error, unknown> = this._state.deposit(amount);

        handleStateResult(this.deposit.name, this.getCurrentState(), result);

        return result;
    }

    /**
     * Este é o método de realizar saque na conta bancária.
     * Porém, ele não realiza a operação de fato, mas ele a delega para o estado atual
     * realizá-la.
     */
    withdraw(amount: number): Result<Error, unknown> {
        const result: Result<Error, unknown> = this._state.withdraw(amount);

        handleStateResult(this.withdraw.name, this.getCurrentState(), result);

        return result;
    }
}

/**
 * Este método é apenas um envelopador da operação realizada pelo estado.
 *
 * Ele só serve para exibir o retorno.
 */
function handleStateResult(operation: string, stateName: string, result: Result<Error, unknown>): void {
    if (result.status === "success") {
        console.log(
            `Sucesso na operação de ${operation} pois o estado atual é ${stateName} e ocorreu o resultado: ${result.value}`,
        );
        return;
    }

    console.log(
        `Falha na operação de ${operation} pois o estado atual é ${stateName} e ocorreu o erro: ${result.error.message}`,
    );
}
