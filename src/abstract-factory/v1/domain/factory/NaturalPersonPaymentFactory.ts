import {
    NaturalPersonDocPayment,
    NaturalPersonPixPayment,
    NaturalPersonTedPayment,
} from "../payment/NaturalPersonPayment";
import { IPaymentMethodFactory } from "./IPaymentMethodFactory";

/**
 * Essa é uma implementação concreta da fábrica de métodos de pagamento [IPaymentMethodFactory].
 *
 * Implementação específica para a família de pagamentos de Pessoa Física.
 */
export class NaturalPersonPaymentFactory implements IPaymentMethodFactory {
    private readonly pixPayment: NaturalPersonPixPayment;
    private readonly tedPayment: NaturalPersonTedPayment;
    private readonly docPayment: NaturalPersonDocPayment;

    constructor(
        pixPayment: NaturalPersonPixPayment,
        tedPayment: NaturalPersonTedPayment,
        docPayment: NaturalPersonDocPayment,
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
