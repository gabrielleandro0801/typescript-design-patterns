import { IPaymentGateway } from "./IPaymentGateway";

/**
 * Este é um literal type contendo as implementações dos gateways de pagamento suportadas.
 * Outras opções, como WePay, Amazon, Stax, não possuem implementações criadas, por isso não estão mapeadas.
 */
export type PaymentGateway = "PAYPAL" | "STRIPE";

/**
 * Esta é uma implementação concreta da interface [IPaymentGateway] voltada para pagamentos
 * realizados via PayPal.
 */
export class PayPalPaymentGateway implements IPaymentGateway {
    async pay(amount: number): Promise<void> {
        console.log(`Pagamento de R$${amount} via API do PayPal!`);
    }
}

/**
 * Esta é uma implementação concreta da interface [IPaymentGateway] voltada para pagamentos
 * realizados via Stripe.
 */
export class StripePaymentGateway implements IPaymentGateway {
    async pay(amount: number): Promise<void> {
        console.log(`Pagamento de R$${amount} via API da Stripe!`);
    }
}
