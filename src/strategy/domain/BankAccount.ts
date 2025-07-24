enum Type {
    CHECKING = "CHECKING",
    SAVING = "SAVING",
    PAYROLL = "PAYROLL",
}

export { Type as BankAccountType };

export class BankAccount {
    private _type: Type;
    private _salary: number = 0;

    get type(): Type {
        return this._type;
    }

    get salary(): number {
        return this._salary;
    }

    set type(type: Type) {
        this._type = type;
    }

    set salary(salary: number) {
        this._salary = salary;
    }
}
