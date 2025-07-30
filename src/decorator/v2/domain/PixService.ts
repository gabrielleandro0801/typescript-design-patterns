import { IPixService } from "./IPixService";

export class PixService implements IPixService {
    async send(amount: number) {
        await waitSeconds(5); // simula processamento assíncrono

        console.log(`Transferência de R$${amount} realizada de forma assíncrona`);
    }
}

async function waitSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
