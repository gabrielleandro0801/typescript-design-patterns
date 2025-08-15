enum Type {
    CHECKING = "CHECKING",
    SAVING = "SAVING",
}

export { Type as BankAccountType };

export class BankAccount {
    private _type: Type;
    private _number: string;
    private _agency: string;
    private _balance: number;

    constructor(type: Type, number: string, agency: string) {
        this._type = type;
        this._balance = 0;
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

    get balance(): number {
        return this._balance;
    }

    set type(type: Type) {
        this._type = type;
    }

    set number(number: string) {
        this._number = number;
    }

    set agency(agency: string) {
        this._agency = agency;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    toJson() {
        return {
            type: this._type,
            number: this._number,
            agency: this._agency,
            balance: this._balance,
        };
    }
}
