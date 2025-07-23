enum Status {
    ACTIVE = "ACTIVE",
    BLOCKED = "BLOCKED",
    CLOSED = "CLOSED",
}

export { Status as BankAccountStatus };

export class BankAccount {
    private _status: Status;
    private _balance: number = 0;

    get status(): Status {
        return this._status;
    }

    get balance(): number {
        return this._balance;
    }

    set status(status: Status) {
        this._status = status;
    }

    set balance(balance: number) {
        this._balance = balance;
    }
}
