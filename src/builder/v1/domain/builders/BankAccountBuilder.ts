import { BankAccountType, BankAccount } from "../entities/BankAccount";
import { IBankAccountBuilder } from "./IBankAccountBuilder";

export class BankAccountBuilder implements IBankAccountBuilder {
    private bankAccount: BankAccount;

    constructor() {
        this.bankAccount = new BankAccount();
    }

    setType(type: BankAccountType): this {
        this.bankAccount.type = type;

        return this;
    }

    setNumber(number: string): this {
        this.bankAccount.number = number;

        return this;
    }

    setAgency(agency: string): this {
        this.bankAccount.agency = agency;

        return this;
    }

    setBalance(balance: number): this {
        this.bankAccount.balance = balance;

        return this;
    }

    getBankAccount(): BankAccount {
        return this.bankAccount;
    }
}
