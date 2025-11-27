import { BankAccountMemento } from "./BankAccountMemento";

/**
 * Esta é a classe zeladora (Caretaker).
 *
 * Ela armazena os snapshots (Mementos) da classe originadora (BankAccount).
 * Ela também não pode modificar os estados.
 */
export class BankAccountHistory {
    private readonly _history: BankAccountMemento[] = [];

    add(memento: BankAccountMemento): void {
        this._history.push(memento);
    }

    retrieve(): BankAccountMemento {
        return this._history.pop();
    }
}
