import { IPaymentMethod } from "./domain/IPaymentMethod";
import { PaymentFactory, PaymentType } from "./domain/PaymentFactory";
import { PixPayment, TedPayment, DocPayment } from "./domain/PaymentMethods";

async function main() {
    const pixPayment: IPaymentMethod = new PixPayment();
    const tedPayment: IPaymentMethod = new TedPayment();
    const docPayment: IPaymentMethod = new DocPayment();

    const paymentFactory: PaymentFactory = new PaymentFactory(pixPayment, tedPayment, docPayment);

    const paymentType: PaymentType = PaymentType.PIX;
    const paymentMethod: IPaymentMethod = paymentFactory.chooseMethod(paymentType);

    await paymentMethod.process();
}

(async () => {
    await main();
})();
