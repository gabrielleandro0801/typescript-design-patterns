/**
 * Esta é apenas uma classe simples representando uma transação bancária.
 */
export class Transaction {
    private readonly _id: string;
    private readonly _amount: number;

    constructor(id: string, amount: number) {
        this._id = id;
        this._amount = amount;
    }

    get id(): string {
        return this._id;
    }

    get amount(): number {
        return this._amount;
    }
}
