import { BankAccount } from "../entities/BankAccount";
import { IObserver } from "../observer/IObserver";
import { EventType, ISubject } from "../observer/ISubject";

/**
 * É a classe de domínio referente ao serviço de contas bancárias.
 * 
 * Ela possui os observadores registrados em cada tipo de evento.
 * 
 * Quando ocorre um evento (depósito ou saque) ela irá invocar os observadores
 * de acordo com o tipo de evento emitido.
 */
export class BankAccountService implements ISubject {
    private observers: { [eventName: string]: IObserver[] } = {};

    constructor() {
        this.observers = {};
    }

    async deposit(account: BankAccount, amount: number): Promise<void> {
        account.deposit(amount);

        await this.notify("deposit", account, amount);
    }

    async withdraw(account: BankAccount, amount: number): Promise<void> {
        account.withdraw(amount);

        await this.notify("withdraw", account, amount);
    }

    subscribe(eventType: EventType, observer: IObserver): void {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }

        this.observers[eventType].push(observer);
    }

    unsubscribe(eventType: EventType, observer: IObserver): void {
        const index: number = this.observers[eventType]?.indexOf(observer);

        if (index > -1) {
            this.observers[eventType].splice(index, 1);
        }
    }

    async notify(action: EventType, account: BankAccount, amount: number): Promise<void> {
        for (const observer of this.observers[action] || []) {
            await observer.update(account, amount);
        }
    }
}
