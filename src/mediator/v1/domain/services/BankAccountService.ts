import { BankAccount, BankAccountType } from "../BankAccount";
import { IAccountMediator } from "../mediator/IAccountMediator";

/**
 * Esse é o serviço principal responsável pela criação da conta bancária.
 *
 * Ele invoca o mediador (Mediator) quando a conta é criada.
 */
export class BankAccountService {
    private readonly bankAccountDomicileService: BankAccountDomicileService;
    private readonly accountMediator: IAccountMediator;

    constructor(bankAccountDomicileService: BankAccountDomicileService, accountMediator: IAccountMediator) {
        this.bankAccountDomicileService = bankAccountDomicileService;
        this.accountMediator = accountMediator;
    }

    async createCheckingAccount(): Promise<BankAccount> {
        const { agency, number, digit } = this.bankAccountDomicileService.generate();
        const bankAccount: BankAccount = new BankAccount(BankAccountType.CHECKING, `${number}-${digit}`, agency);

        await this.accountMediator.onAccountCreated(bankAccount);

        return bankAccount;
    }

    async createSavingAccount(): Promise<BankAccount> {
        const { agency, number, digit } = this.bankAccountDomicileService.generate();
        const bankAccount: BankAccount = new BankAccount(BankAccountType.SAVING, `${number}-${digit}`, agency);

        await this.accountMediator.onAccountCreated(bankAccount);

        return bankAccount;
    }
}

export class BankAccountDomicileService {
    generate(): { agency: string; number: string; digit: string } {
        const agency: string = String(Math.floor(1000 + Math.random() * 9000));
        const number: string = String(Math.floor(10000000 + Math.random() * 90000000));
        const digit: string = this.calculateMod11(number);

        return { agency, number, digit: digit };
    }

    private calculateMod11(number: string): string {
        const weights: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
        let sum = 0;
        let weightIndex = 0;

        for (let i = number.length - 1; i >= 0; i--) {
            sum += parseInt(number[i], 10) * weights[weightIndex];
            weightIndex = (weightIndex + 1) % weights.length;
        }

        const remainer: number = sum % 11;
        if (remainer === 0 || remainer === 1) {
            return "0";
        }

        if (remainer === 10) {
            return "X";
        }

        return String(11 - remainer);
    }
}
