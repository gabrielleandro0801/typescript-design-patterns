import { IDocPayment, IPixPayment, ITedPayment } from "./IPaymentModes";

/**
 * Essa é uma implementação concreta do método de pagamento PIX [IPixPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Física.
 */
export class NaturalPersonPixPayment implements IPixPayment {
    async send(amount: number): Promise<void> {
        console.log(`Enviando R$${amount} via PIX com limite diário`);
    }
}

/**
 * Essa é uma implementação concreta do método de pagamento TED [ITedPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Física.
 */
export class NaturalPersonTedPayment implements ITedPayment {
    async send(amount: number): Promise<void> {
        console.log(`Transferindo R$${amount} via TED (sem agendamento)`);
    }
}

/**
 * Essa é uma implementação concreta do método de pagamento DOC [IDocPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Física.
 */
export class NaturalPersonDocPayment implements IDocPayment {
    async send(amount: number): Promise<void> {
        console.log(`DOC de Pessoa Física de R$${amount}`);
    }
}
