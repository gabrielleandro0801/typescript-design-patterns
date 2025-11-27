import { BankAccountMemento } from "./BankAccountMemento";

/**
 * Esta é a classe originadora (Originator).
 *
 * Ela é o alvo que se deseja guardar snapshots. Embora ela possua os métodos
 * públicos **save** e **restore**, ela não realiza essas operações. Quem irá
 * fazer esse controle é a classe zeladora (Caretaker).
 *
 * Os snapshots gerados por essa classe são os mementos (BankAccountMemento).
 */
export class BankAccount {
    private _creditLimit: number;

    constructor(creditLimit: number) {
        this.creditLimit = creditLimit;
    }

    get creditLimit() {
        return this._creditLimit;
    }

    set creditLimit(creditLimit: number) {
        console.log(`Current limit R$${creditLimit}`);
        this._creditLimit = creditLimit;
    }

    save(): BankAccountMemento {
        console.log(`Saving account state for limit R$${this._creditLimit}`);

        return new BankAccountMemento(this._creditLimit);
    }

    restore(memento: BankAccountMemento) {
        console.log(`Restoring account state for limit R$${memento.creditLimit}`);

        this.creditLimit = memento.creditLimit;
    }
}
