import { IComponent } from "./IComponent";

/**
 * Este é o objeto Folha (Leaf).
 * É o último objeto da árvore, ou seja, não possui filhos.
 *
 * Ele representa uma Caixinha do Nubank (Box).
 *
 * Ele implementa a interface IComponent e possui dois métodos a mais, para
 * permitir depósito e saque na caixinha.
 */
export class Box implements IComponent {
    private _name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this._name = name;
        this._balance = balance;
    }

    get name(): string {
        return this._name;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    withdraw(amount: number) {
        this._balance -= amount;
    }

    get structure(): { [x: string]: {} } {
        return { [this._name]: this._balance };
    }
}
