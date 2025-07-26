import { LegalPersonDocPayment, LegalPersonPixPayment, LegalPersonTedPayment } from "../payment/LegalPersonPayment";
import { IPaymentMethodFactory } from "./IPaymentMethodFactory";

/**
 * Essa é uma implementação concreta da fábrica de métodos de pagamento [IPaymentMethodFactory].
 *
 * Implementação específica para a família de pagamentos de Pessoa Jurídica.
 */
export class LegalPersonPaymentFactory implements IPaymentMethodFactory {
    private readonly pixPayment: LegalPersonPixPayment;
    private readonly tedPayment: LegalPersonTedPayment;
    private readonly docPayment: LegalPersonDocPayment;

    constructor(
        pixPayment: LegalPersonPixPayment,
        tedPayment: LegalPersonTedPayment,
        docPayment: LegalPersonDocPayment,
    ) {
        this.pixPayment = pixPayment;
        this.tedPayment = tedPayment;
        this.docPayment = docPayment;
    }

    createPix() {
        return this.pixPayment;
    }

    createTed() {
        return this.tedPayment;
    }

    createDoc() {
        return this.docPayment;
    }
}
