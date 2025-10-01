export class BankAccount {
    number: string;
    agency: string;
    balance: number;

    constructor(number: string, agency: string, balance: number) {
        this.number = number;
        this.agency = agency;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }
}
