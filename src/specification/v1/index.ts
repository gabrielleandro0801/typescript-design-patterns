import { Either } from "../../result/v1/Either";
import { BankAccount, BankAccountStatus } from "./domain/BankAccount";
import { AccountClosingSpecification } from "./validators/AccountClosingSpecification";

/**
 * As primeiras duas instâncias da classe BankAccount não podem ser canceladas
 * devido às validações. A terceira pode.
 */
function main() {
    const firstBankAccount: BankAccount = new BankAccount();
    firstBankAccount.balance = 10;

    const secondBankAccount: BankAccount = new BankAccount();
    secondBankAccount.status = BankAccountStatus.BLOCKED;

    const thirdBankAccount: BankAccount = new BankAccount();
    thirdBankAccount.status = BankAccountStatus.ACTIVE;

    for (const bankAccount of [firstBankAccount, secondBankAccount, thirdBankAccount]) {
        const specificationResponse: Either<Error, true> = new AccountClosingSpecification().isSatisfiedBy({
            bankAccount,
        });

        if (specificationResponse.isLeft()) {
            console.log(`Unable to close account because: ${specificationResponse.error.message}`);

            continue;
        }

        console.log("Account can be closed");
    }
}

(() => {
    main();
})();
