import { BankAccount } from "./BankAccount";
import { BankAccountHistory } from "./BankAccountHistory";
import { BankAccountMemento } from "./BankAccountMemento";

/**
 * Esta é a função principal.
 *
 * Inicialmente é instanciado o zelador dos estados (BankAccountHistory).
 *
 * Em seguida, é instanciada a classe originadora (BankAccount) com um
 * determinado valor de limite de crédito.
 *
 * Após isso, esse valor é manipulado através do **setter** da classe e
 * os novos estados são salvos e fornecidos ao zelador. Por fim, os estados
 * são recuperados no zelador e restaurados para a classe originadora.
 */
function main() {
    const history: BankAccountHistory = new BankAccountHistory();

    const bankAccount: BankAccount = new BankAccount(100);
    history.add(bankAccount.save());

    bankAccount.creditLimit = 250;
    history.add(bankAccount.save());

    bankAccount.creditLimit = 500;

    let state: BankAccountMemento;

    state = history.retrieve();
    if (state) {
        bankAccount.restore(state);
    }

    state = history.retrieve();
    if (state) {
        bankAccount.restore(state);
    }

    state = history.retrieve();
    if (state) {
        bankAccount.restore(state);
    }
}

(() => {
    main();
})();
