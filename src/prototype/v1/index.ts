import { BankAccount } from "./domain/BankAccount";
import {
    checkingAccountPrototype,
    premiumAccountPrototype,
    savingAccountPrototype,
} from "./domain/PreConfiguredPrototypes";

/**
 * Este método cria as intâncias de BankAccount através da clonagem dos protótipos
 * previamente cadastrados.
 */
function main() {
    const checkingAccount: BankAccount = checkingAccountPrototype.clone();
    /**
     * Este primeiro portador, através de sua fidelidade, adquiriu mais um benefício para sua conta.
     */
    checkingAccount.addBenefit("TED_WITHOUT_FEE");

    const savingAccount: BankAccount = savingAccountPrototype.clone();
    /**
     * Este segundo portador realizou um depósito de R$100.
     */
    savingAccount.balance = 100;

    const premiumAccount: BankAccount = premiumAccountPrototype.clone();
    /**
     * Este terceiro portador, por atrasos na sua fatura, perdeu o benefício do cartão de crédito.
     */
    premiumAccount.removeBenefit("CREDIT_CARD");

    console.log(checkingAccount.toJson());
    console.log(savingAccount.toJson());
    console.log(premiumAccount.toJson());
}

(() => {
    main();
})();
