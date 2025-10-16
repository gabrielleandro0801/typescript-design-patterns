import { Transaction } from "./domain/Transaction";
import { TransactionHistory } from "./domain/TransactionHistory";

function main() {
    const transactionHistory = new TransactionHistory([
        new Transaction("01", 10),
        new Transaction("02", 20),
        new Transaction("03", -10),
        new Transaction("04", -20),
        new Transaction("05", 30),
        new Transaction("06", -30),
        new Transaction("07", -90),
        new Transaction("08", 90),
        new Transaction("09", 15),
        new Transaction("10", -15),
    ]);

    /**
     * Aqui é feita uma iteração no iterador padrão das transações.
     */
    console.log("Iterating transactions through the Default iterator:");
    for (const transaction of transactionHistory) {
        console.log(`Transaction | ID:${transaction.id} R$${transaction.amount.toFixed(2)}`);
    }

    /* ========== | ========== | ========== | ========== | ========== */
    console.log("\nIterating transactions through the Reversal iterator:");
    const reversalIterator: Iterator<Transaction, null, void> = transactionHistory.createReversalIterator();

    /**
     * Aqui é feita uma iteração no iterador reverso das transações.
     */
    let result = reversalIterator.next();
    while (!result.done) {
        result = logAndIterate(result, reversalIterator);
    }

    /* ========== | ========== | ========== | ========== | ========== */
    console.log("\nIterating transactions through the Only Cashin iterator:");
    const onlyCashinIterator: Iterator<Transaction, null, void> = transactionHistory.createOnlyCashinIterator();

    /**
     * Aqui é feita uma iteração no iterador das transações de cashin.
     */
    result = onlyCashinIterator.next();
    while (!result.done) {
        result = logAndIterate(result, onlyCashinIterator);
    }

    /* ========== | ========== | ========== | ========== | ========== */
    console.log("\nIterating transactions through the Only Cashout iterator:");
    const onlyCashoutIterator: Iterator<Transaction, null, void> = transactionHistory.createOnlyCashoutIterator();

    /**
     * Aqui é feita uma iteração no iterador das transações de cashout.
     */
    result = onlyCashoutIterator.next();
    while (!result.done) {
        result = logAndIterate(result, onlyCashoutIterator);
    }

    /* ========== | ========== | ========== | ========== | ========== */
    console.log("\nIterating transactions through the Sorted iterator:");
    const sortedIterator: Iterator<Transaction, null, void> = transactionHistory.createSortedIterator();

    /**
     * Aqui é feita uma iteração no iterador ordenado das transações.
     */
    result = sortedIterator.next();
    while (!result.done) {
        result = logAndIterate(result, sortedIterator);
    }
}

function logAndIterate(result: IteratorResult<Transaction, null>, iterator: Iterator<Transaction, null, void>) {
    const { value: transaction } = result;
    console.log(`Transaction | ID:${transaction.id} R$${transaction.amount.toFixed(2)}`);

    return iterator.next();
}

(() => {
    main();
})();
