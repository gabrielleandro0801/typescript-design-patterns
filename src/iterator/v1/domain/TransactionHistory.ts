import { Transaction } from "./Transaction";

/**
 * Esta classe implementa a interface Iterable do Typescript fornecendo
 * a classe Transaction no Generics.
 *
 * Uma classe Iterável deve implementar o método [Symbol.iterator]().
 * Através deste método essa classe retorna um iterador, ou seja, uma classe que
 * implementa a interface Iterator.
 *
 * Ela pode ser iterada através do (for ... of) da seguinte forma:
 *
 * ``` typescript
 * const history = new TransactionHistory([]);
 *
 * for (const transaction of history) {
 *    console.log(transaction);
 * }
 * ```
 */
export class TransactionHistory implements Iterable<Transaction, null, void> {
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.collection = collection;
    }

    [Symbol.iterator](): Iterator<Transaction, null, void> {
        return new DefaultTransactionIterator(this.collection);
    }

    createReversalIterator(): Iterator<Transaction, null, void> {
        return new ReversalTransactionIterator(this.collection);
    }

    createOnlyCashinIterator(): Iterator<Transaction, null, void> {
        return new OnlyCashinTransactionIterator(this.collection);
    }

    createOnlyCashoutIterator(): Iterator<Transaction, null, void> {
        return new OnlyCashoutTransactionIterator(this.collection);
    }

    createSortedIterator(): Iterator<Transaction, null, void> {
        return new SortedTransactionIterator(this.collection);
    }
}

/**
 * Esta classe é um Iterador. Ela deve implementar o método **next**, que deve retornar
 * o objeto contendo o valor e a flag indicando se o iterador acabou ou não.
 *
 * Este é o iterador padrão das transações.
 */
export class DefaultTransactionIterator implements Iterator<Transaction, null, void> {
    private position: number;
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.position = 0;
        this.collection = collection;
    }

    next(): IteratorResult<Transaction, null> {
        if (this.hasNext()) {
            return {
                value: this.collection[this.position++],
                done: false,
            };
        }

        return {
            value: null,
            done: true,
        };
    }

    private hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

/**
 * Esta classe é um Iterador. Ela deve implementar o método **next**, que deve retornar
 * o objeto contendo o valor e a flag indicando se o iterador acabou ou não.
 *
 * Este é o iterador que retorna as transações em ordem invertida.
 */
export class ReversalTransactionIterator implements Iterator<Transaction, null, void> {
    private position: number;
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.position = 0;
        this.collection = Array.from(collection).reverse();
    }

    next(): IteratorResult<Transaction, null> {
        if (this.hasNext()) {
            return {
                value: this.collection[this.position++],
                done: false,
            };
        }

        return {
            value: null,
            done: true,
        };
    }

    private hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

/**
 * Esta classe é um Iterador. Ela deve implementar o método **next**, que deve retornar
 * o objeto contendo o valor e a flag indicando se o iterador acabou ou não.
 *
 * Este é o iterador somente das transações de cashin.
 */
export class OnlyCashinTransactionIterator implements Iterator<Transaction, null, void> {
    private position: number;
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.position = 0;
        this.collection = collection.filter((transaction: Transaction) => transaction.amount > 0);
    }

    next(): IteratorResult<Transaction, null> {
        if (this.hasNext()) {
            return {
                value: this.collection[this.position++],
                done: false,
            };
        }

        return {
            value: null,
            done: true,
        };
    }

    private hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

/**
 * Esta classe é um Iterador. Ela deve implementar o método **next**, que deve retornar
 * o objeto contendo o valor e a flag indicando se o iterador acabou ou não.
 *
 * Este é o iterador somente das transações de cashout.
 */
export class OnlyCashoutTransactionIterator implements Iterator<Transaction, null, void> {
    private position: number;
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.position = 0;
        this.collection = collection.filter((transaction: Transaction) => transaction.amount < 0);
    }

    next(): IteratorResult<Transaction, null> {
        if (this.hasNext()) {
            return {
                value: this.collection[this.position++],
                done: false,
            };
        }

        return {
            value: null,
            done: true,
        };
    }

    private hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

/**
 * Esta classe é um Iterador. Ela deve implementar o método **next**, que deve retornar
 * o objeto contendo o valor e a flag indicando se o iterador acabou ou não.
 *
 * Este é o iterador que das transações ordenadas.
 */
export class SortedTransactionIterator implements Iterator<Transaction, null, void> {
    private position: number;
    private collection: Transaction[];

    constructor(collection: Transaction[]) {
        this.position = 0;
        this.collection = Array.from(collection).sort(
            (one: Transaction, another: Transaction) => one.amount - another.amount,
        );
    }

    next(): IteratorResult<Transaction, null> {
        if (this.hasNext()) {
            return {
                value: this.collection[this.position++],
                done: false,
            };
        }

        return {
            value: null,
            done: true,
        };
    }

    private hasNext(): boolean {
        return this.position < this.collection.length;
    }
}
