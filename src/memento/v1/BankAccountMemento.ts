/**
 * Esta classe é um snapshot imutável da classe originária (BankAccount).
 *
 * Ela apenas armazena o estado, sem poder modificar os atributos.
 */
export class BankAccountMemento {
    private readonly _creditLimit: number;
    private readonly _timestamp: Date;

    constructor(creditLimit: number) {
        this._creditLimit = creditLimit;
        this._timestamp = new Date();
    }

    get creditLimit() {
        return this._creditLimit;
    }

    get timestamp() {
        return this._timestamp;
    }
}
