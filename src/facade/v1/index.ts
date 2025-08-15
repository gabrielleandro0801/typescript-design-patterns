import { TransactionService } from "./domain/TransactionService";
import { AwsFacade } from "./infra/AwsFacade";

async function main() {
    const awsFacade: AwsFacade = new AwsFacade();
    const transactionService: TransactionService = new TransactionService(awsFacade);

    await transactionService.create(10);
}

(async () => {
    await main();
})();
