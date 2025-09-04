import { Money } from "./Money";

enum Type {
    CHECKING = "CHECKING",
    SAVING = "SAVING",
}

export { Type as BankAccountType };

/**
 * Essa é a entidade de conta bancária. Ela é composta por uma moeda (Currency).
 * Ela utiliza a fábrica de moedas (CurrencyFactory) para obter a instância da moeda desejada.
 *
 * Uma mesma moeda (Real Brasileiro, por exemplo) pode ser repetida em inúmeras contas bancárias.
 */
export class BankAccount {
    private _type: Type;
    private _number: string;
    private _agency: string;
    private _balance: Money;

    constructor(type: Type, balance: Money, number: string, agency: string) {
        this._type = type;
        this._balance = balance;
        this._number = number;
        this._agency = agency;
    }

    get type(): Type {
        return this._type;
    }

    get number(): string {
        return this._number;
    }

    get agency(): string {
        return this._agency;
    }

    get balance(): Money {
        return this._balance;
    }

    toString() {
        return (
            `Type: ${this._type} | Number: ${this._number}` +
            `| Agency: ${this._agency} | balance: ${JSON.stringify(this._balance.toString())}`
        );
    }
}
