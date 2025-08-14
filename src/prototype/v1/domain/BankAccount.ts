import { IPrototype } from "./IPrototype";

type Type = "CHECKING" | "SAVING" | "PREMIUM";

type Benefit =
    | "DEBIT_CARD"
    | "CREDIT_CARD"
    | "MONTHLY_WITHDRAWAL"
    | "MULTIPLE_WITHDRAWALS"
    | "TED_WITHOUT_FEE"
    | "TRAVEL_INSURANCE";

export { Benefit as BankAccountBenefit };

export class BankAccount implements IPrototype<BankAccount> {
    private _type: Type;
    private _agency: string;
    private _balance: number;
    private _benefits: Set<Benefit>;

    constructor(type: Type, agency: string, balance: number, benefits: Set<Benefit>) {
        this._type = type;
        this._agency = agency;
        this._balance = balance;
        this._benefits = benefits;
    }

    get type(): Type {
        return this._type;
    }

    get agency(): string {
        return this._agency;
    }

    get balance(): number {
        return this._balance;
    }

    get benefits(): Set<Benefit> {
        return this._benefits;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    addBenefit(benefit: Benefit): void {
        if (!this._benefits.has(benefit)) {
            this._benefits.add(benefit);
        }
    }

    removeBenefit(benefit: Benefit): void {
        if (this._benefits.has(benefit)) {
            this._benefits.delete(benefit);
        }
    }

    toJson() {
        return {
            type: this.type,
            agency: this._agency,
            balance: this._balance,
            benefits: [...this._benefits],
        };
    }
    clone(): BankAccount {
        return new BankAccount(this.type, this.agency, this.balance, this._benefits);
    }
}
