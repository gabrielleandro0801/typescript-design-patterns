import { BankAccount } from "./BankAccount";

export interface IMonthlyFeeStrategy {
    calculate(bankAccount: BankAccount): number;
}
