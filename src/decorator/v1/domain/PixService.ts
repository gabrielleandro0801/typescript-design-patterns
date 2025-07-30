import { asyncLoggingDecorator, loggingDecorator } from "../logging/LoggingDecorator";

export class PixService {
    @asyncLoggingDecorator()
    async sendAsync(amount: number) {
        await waitSeconds(5); // simula processamento assíncrono

        console.log(`Transferência de R$${amount} realizada de forma assíncrona`);
    }

    @loggingDecorator()
    sendSync(amount: number) {
        console.log(`Transferência de R$${amount} realizada de forma síncrona`);
    }
}

async function waitSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
