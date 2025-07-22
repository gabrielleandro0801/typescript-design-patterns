import { BankAccount, BankAccountType } from "../entities/BankAccount";

export interface IBankAccountBuilder {
    setType(type: BankAccountType): this;
    setNumber(number: string): this;
    setAgency(agency: string): this;
    setBalance(balance: number): this;
    getBankAccount(): BankAccount;
}
