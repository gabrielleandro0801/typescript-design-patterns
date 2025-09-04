import { BankAccount, BankAccountType } from "./domain/BankAccount";
import { Money } from "./domain/Money";

/**
 * Este é o arquivo principal, que realiza a instanciação de contas bancárias (BankAccount).
 */
function main() {
    const bankAccountOne: BankAccount = new BankAccount(
        BankAccountType.CHECKING,
        new Money("10", [
            {
                code: "BRL",
                symbol: "R$",
            },
        ]),
        "1234",
        "0001",
    );
    console.log(bankAccountOne.toString());

    const bankAccountTwo: BankAccount = new BankAccount(
        BankAccountType.SAVING,
        new Money("0", [
            {
                code: "BRL",
                symbol: "R$",
            },
        ]),
        "5678",
        "0001",
    );
    console.log(bankAccountTwo.toString());

    const bankAccountThree: BankAccount = new BankAccount(
        BankAccountType.SAVING,
        new Money("40", [
            {
                code: "USD",
                symbol: "$",
            },
        ]),
        "9012",
        "0001",
    );
    console.log(bankAccountThree.toString());

    const bankAccountFour: BankAccount = new BankAccount(
        BankAccountType.CHECKING,
        new Money("0", [
            {
                code: "USD",
                symbol: "$",
            },
        ]),
        "3456",
        "0001",
    );
    console.log(bankAccountFour.toString());
}

(() => {
    main();
})();
