import { BankAccount } from "../entities/BankAccount";
import { IObserver } from "./IObserver";

export type EventType = "deposit" | "withdraw";

/**
 * Esta é a interface do publicador de eventos (Subject).
 */
export interface ISubject {
    subscribe(eventType: EventType, observer: IObserver): void;
    unsubscribe(eventType: EventType, observer: IObserver): void;
    notify(action: EventType, account: BankAccount, amount: number): Promise<void>;
}
