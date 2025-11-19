import { BankingAccountWithdrawalProcessor } from "./withdrawal/BankingAccountWithdrawalProcessor";
import { CheckingAccountWithdrawal } from "./withdrawal/CheckingAccountWithdrawal";
import { SavingAccountWithdrawal } from "./withdrawal/SavingAccountWithdrawal";

/**
 * Esta é a função principal. Ela instancia dois processadores de saque de
 * conta bancária, um para conta corrente e outro para poupança. Cada um possui
 * sua variação na implementação dos métodos abstratos.
 */
function main() {
    const checkingAccountWithdrawal: BankingAccountWithdrawalProcessor = new CheckingAccountWithdrawal(100);
    checkingAccountWithdrawal.process(10);

    console.log();

    const savingAccountWithdrawal: BankingAccountWithdrawalProcessor = new SavingAccountWithdrawal(200);
    savingAccountWithdrawal.process(70);
}

(() => {
    main();
})();
