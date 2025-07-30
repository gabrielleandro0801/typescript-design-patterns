import { PixService } from "./domain/PixService";

async function main() {
    const pixService: PixService = new PixService();

    pixService.sendSync(5);
    await pixService.sendAsync(10);
}

(async () => {
    await main();
})();
