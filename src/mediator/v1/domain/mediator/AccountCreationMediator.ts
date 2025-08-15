import { BankAccount, BankAccountType } from "../BankAccount";
import { DebitCardService, CreditCardService } from "../services/CardService";
import { CcsService } from "../services/CcsService";
import { PixService } from "../services/PixService";
import { IAccountMediator } from "./IAccountMediator";

/**
 * Esta classe é a implementação concreta do mediador IAccountMediator.
 *
 * Quando uma conta é criada ele sabe quais serviços invocar de acordo com o tipo.
 */
export class AccountCreationMediator implements IAccountMediator {
    private readonly pixService: PixService;
    private readonly debitCardService: DebitCardService;
    private readonly creditCardService: CreditCardService;
    private readonly ccsService: CcsService;

    constructor(
        pixService: PixService,
        debitCardService: DebitCardService,
        creditCardService: CreditCardService,
        ccsService: CcsService,
    ) {
        this.pixService = pixService;
        this.debitCardService = debitCardService;
        this.creditCardService = creditCardService;
        this.ccsService = ccsService;
    }
    async onAccountCreated(bankAccount: BankAccount): Promise<void> {
        if (bankAccount.type === BankAccountType.CHECKING) {
            await this.pixService.createRandomPixKey(bankAccount);
            await this.creditCardService.create(bankAccount);
            await this.ccsService.reportOpening(bankAccount);

            return;
        }

        if (bankAccount.type === BankAccountType.SAVING) {
            await this.debitCardService.create(bankAccount);

            return;
        }
    }
}
