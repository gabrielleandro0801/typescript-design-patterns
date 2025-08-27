import { IPaymentGateway } from "./IPaymentGateway";
import { PaymentGateway, PayPalPaymentGateway, StripePaymentGateway } from "./PaymentGateway";
import { BoletoPayment, CreditCardPayment, PaymentMode, PaymentProcessor, PixPayment } from "./PaymentModes";

/**
 * Este serviço foi definido de forma genérica, na qual são utilizadas chaves
 * para escolha de qual modo de pagamento e qual gateway serão utilizados.
 */
export class PaymentService {
    async pay(amount: number, mode: PaymentMode, gateway: PaymentGateway): Promise<void> {
        const paymentProcessor: PaymentProcessor = this.buildPaymentProcessor(mode, gateway);

        await paymentProcessor.pay(amount);
    }

    private buildPaymentProcessor(mode: PaymentMode, gateway: PaymentGateway): PaymentProcessor {
        const paymentGatewayMap: Map<PaymentGateway, IPaymentGateway> = new Map<PaymentGateway, IPaymentGateway>([
            ["PAYPAL", new PayPalPaymentGateway()],
            ["STRIPE", new StripePaymentGateway()],
        ]);

        const paymentGateway: IPaymentGateway = paymentGatewayMap.get(gateway);
        if (!paymentGateway) {
            throw new Error();
        }

        const paymentModeFactoryMap = new Map<PaymentMode, (gateway: IPaymentGateway) => PaymentProcessor>([
            ["CREDIT_CARD", (gateway: IPaymentGateway) => new CreditCardPayment(gateway)],
            ["PIX", (gateway: IPaymentGateway) => new PixPayment(gateway)],
            ["BOLETO", (gateway: IPaymentGateway) => new BoletoPayment(gateway)],
        ]);

        const paymentModeFactory: (gateway: IPaymentGateway) => PaymentProcessor = paymentModeFactoryMap.get(mode);

        return paymentModeFactory(paymentGateway);
    }
}
