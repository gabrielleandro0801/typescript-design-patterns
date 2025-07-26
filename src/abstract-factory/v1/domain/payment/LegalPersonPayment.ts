import { IDocPayment, IPixPayment, ITedPayment } from "./IPaymentModes";

/**
 * Essa é uma implementação concreta do método de pagamento PIX [IPixPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Jurídica.
 */
export class LegalPersonPixPayment implements IPixPayment {
    async send(amount: number): Promise<void> {
        console.log(`PIX corporativo de R$${amount} com prioridade alta`);
    }
}

/**
 * Essa é uma implementação concreta do método de pagamento TED [ITedPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Jurídica.
 */
export class LegalPersonTedPayment implements ITedPayment {
    async send(amount: number): Promise<void> {
        console.log(`TED empresarial de R$${amount} com agendamento permitido`);
    }
}

/**
 * Essa é uma implementação concreta do método de pagamento DOC [IDocPayment].
 *
 * Implementação específica para a família de pagamentos de Pessoa Jurídica.
 */
export class LegalPersonDocPayment implements IDocPayment {
    async send(amount: number): Promise<void> {
        console.log(`DOC corporativa de R$${amount}`);
    }
}
