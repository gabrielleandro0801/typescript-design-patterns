import { IPaymentMethod } from "./IPaymentMethod";

export class PixPayment implements IPaymentMethod {
    async process(): Promise<void> {
        console.log("Requesting to PIX service");
    }
}

export class TedPayment implements IPaymentMethod {
    async process(): Promise<void> {
        console.log("Requesting to TED service");
    }
}

export class DocPayment implements IPaymentMethod {
    async process(): Promise<void> {
        console.log("Requesting to DOC service");
    }
}
