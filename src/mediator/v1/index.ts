import { AccountCreationMediator } from "./domain/mediator/AccountCreationMediator";
import { IAccountMediator } from "./domain/mediator/IAccountMediator";
import { BankAccountDomicileService, BankAccountService } from "./domain/services/BankAccountService";
import { CardNumberService, CreditCardService, DebitCardService } from "./domain/services/CardService";
import { CcsService } from "./domain/services/CcsService";
import { PixService } from "./domain/services/PixService";

async function main() {
    const pixService: PixService = new PixService();
    const ccsService: CcsService = new CcsService();

    const cardNumberService: CardNumberService = new CardNumberService();
    const debitCardService: DebitCardService = new DebitCardService(cardNumberService);
    const creditCardService: CreditCardService = new CreditCardService(cardNumberService);

    const accountMediator: IAccountMediator = new AccountCreationMediator(
        pixService,
        debitCardService,
        creditCardService,
        ccsService,
    );

    const bankAccountDomicileService: BankAccountDomicileService = new BankAccountDomicileService();
    const bankAccountService: BankAccountService = new BankAccountService(bankAccountDomicileService, accountMediator);

    await bankAccountService.createCheckingAccount();
    console.log("\n");
    await bankAccountService.createSavingAccount();
}

(async () => {
    await main();
})();
