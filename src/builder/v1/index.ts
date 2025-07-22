import { BankAccountBuilder } from "./domain/builders/BankAccountBuilder";
import { BankAccount, BankAccountType } from "./domain/entities/BankAccount";

/**
 * A classe BankAccount pode ser instanciada de diferentes formas.
 * Com isso, através do Builder e seus métodos, a classe cliente instancia fornecendo
 * apenas os valores necessários para a situação.
 */
function main() {
    console.log("Creating empty BankAccount");
    const emptyBankAccount: BankAccount = new BankAccountBuilder().getBankAccount();
    console.log(emptyBankAccount.toJson());

    console.log("Creating full BankAccount");
    const fullBankAccount: BankAccount = new BankAccountBuilder()
        .setType(BankAccountType.CHECKING)
        .setAgency("0001")
        .setNumber("12345")
        .setBalance(10)
        .getBankAccount();
    console.log(fullBankAccount.toJson());

    console.log("Creating half BankAccount");
    const halfBankAccount: BankAccount = new BankAccountBuilder()
        .setType(BankAccountType.CHECKING)
        .setNumber("12345")
        .getBankAccount();
    console.log(halfBankAccount.toJson());
}

(() => {
    main();
})();
