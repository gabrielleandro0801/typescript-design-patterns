import { IDocPayment, IPixPayment, ITedPayment } from "../payment/IPaymentModes";

/**
 * Essa é a interface da fábrica abstrata (Abstract Factory).
 */
export interface IPaymentMethodFactory {
    createPix(): IPixPayment;
    createTed(): ITedPayment;
    createDoc(): IDocPayment;
}
