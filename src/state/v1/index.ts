import { BankAccount } from "./domain/BankAccount";

/**
 * Este é o arquivo principal. Ele realiza a instanciação da conta bancária e a
 * manipulação de seus métodos.
 *
 * Através do encapsulamento das regras o estado da conta é alterado conforme cada
 * regra é aplicada.
 */
function main() {
    const bankAccount: BankAccount = new BankAccount();

    console.log(`Inicialmente o estado da conta bancária é ${bankAccount.getCurrentState()}`);

    bankAccount.deposit(10);
    bankAccount.withdraw(10);

    bankAccount.withdraw(20);
    bankAccount.deposit(10);
    bankAccount.deposit(10);
    bankAccount.deposit(80);

    bankAccount.close();

    bankAccount.deposit(10);
}

(() => {
    main();
})();
