import { IPaymentGateway } from "./IPaymentGateway";

/**
 * Este é um literal type contendo as implementações dos métodos de pagamento suportadas.
 * Outras opções, como TED, não possuem implementações criadas, por isso não estão mapeadas.
 */
export type PaymentMode = "CREDIT_CARD" | "PIX" | "BOLETO";

/**
 * Esta é a classe abstrata que será estendida pelos diferentes métodos de pagamento, como
 * - Cartão de crédito
 * - Pix
 * - Boleto
 *
 * etc.
 *
 * Esta classe possui um gateway (uma implementação da interface IPaymentGateway), que será
 * através dele que o pagamento será realizado.
 */
export abstract class PaymentProcessor {
    protected gateway: IPaymentGateway;

    constructor(gateway: IPaymentGateway) {
        this.gateway = gateway;
    }

    abstract pay(amount: number): Promise<void>;
}

/**
 * Está é uma extensão da classe [PaymentProcessor] voltada a pagamentos via Cartão de crédito.
 */
export class CreditCardPayment extends PaymentProcessor {
    async pay(amount: number): Promise<void> {
        console.log("Pagamento com Cartão de Crédito:");
        await this.gateway.pay(amount);
    }
}

/**
 * Está é uma extensão da classe [PaymentProcessor] voltada a pagamentos via Pix.
 */
export class PixPayment extends PaymentProcessor {
    async pay(amount: number): Promise<void> {
        console.log("Pagamento com Pix:");
        await this.gateway.pay(amount);
    }
}

/**
 * Está é uma extensão da classe [PaymentProcessor] voltada a pagamentos via Boleto.
 */
export class BoletoPayment extends PaymentProcessor {
    async pay(amount: number): Promise<void> {
        console.log("Pagamento com Boleto:");
        await this.gateway.pay(amount);
    }
}
