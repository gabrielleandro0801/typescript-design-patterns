import { IPaymentMethod } from "./IPaymentMethod";

export enum PaymentType {
    PIX = "PIX",
    TED = "TED",
    DOC = "DOC",
}

/**
 * O método [chooseMethod] é a fábrica que irá retornar o método de pagamento adequado
 * de acordo com o tipo fornecido como parâmetro.
 */
export class PaymentFactory {
    private readonly pixPayment: IPaymentMethod;
    private readonly tedPayment: IPaymentMethod;
    private readonly docPayment: IPaymentMethod;

    constructor(pixPayment: IPaymentMethod, tedPayment: IPaymentMethod, docPayment: IPaymentMethod) {
        this.pixPayment = pixPayment;
        this.tedPayment = tedPayment;
        this.docPayment = docPayment;
    }

    chooseMethod(type: PaymentType): IPaymentMethod {
        const paymentTypes: Map<PaymentType, IPaymentMethod> = new Map<PaymentType, IPaymentMethod>([
            [PaymentType.PIX, this.pixPayment],
            [PaymentType.TED, this.tedPayment],
            [PaymentType.DOC, this.docPayment],
        ]);

        const paymentMethod: IPaymentMethod = paymentTypes.get(type);

        if (!paymentMethod) {
            throw new Error(`Method not found for type ${type}`);
        }

        return paymentMethod;
    }
}
