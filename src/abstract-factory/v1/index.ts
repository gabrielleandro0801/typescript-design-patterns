import { IPaymentMethodFactory } from "./domain/factory/IPaymentMethodFactory";
import { LegalPersonPaymentFactory } from "./domain/factory/LegalPersonPaymentFactory";
import { NaturalPersonPaymentFactory } from "./domain/factory/NaturalPersonPaymentFactory";
import { IDocPayment, IPixPayment, ITedPayment } from "./domain/payment/IPaymentModes";
import {
    LegalPersonDocPayment,
    LegalPersonPixPayment,
    LegalPersonTedPayment,
} from "./domain/payment/LegalPersonPayment";
import {
    NaturalPersonDocPayment,
    NaturalPersonPixPayment,
    NaturalPersonTedPayment,
} from "./domain/payment/NaturalPersonPayment";

async function main() {
    const legalPersonFactory: IPaymentMethodFactory = getLegalPersonFactory();
    const naturalPersonFactory: IPaymentMethodFactory = getNaturalPersonFactory();

    await processPayments(legalPersonFactory);

    console.log("---");

    await processPayments(naturalPersonFactory);
}

function getLegalPersonFactory(): IPaymentMethodFactory {
    const pixPayment: LegalPersonPixPayment = new LegalPersonPixPayment();
    const tedPayment: LegalPersonTedPayment = new LegalPersonTedPayment();
    const docPayment: LegalPersonDocPayment = new LegalPersonDocPayment();

    return new LegalPersonPaymentFactory(pixPayment, tedPayment, docPayment);
}

function getNaturalPersonFactory(): IPaymentMethodFactory {
    const pixPayment: NaturalPersonPixPayment = new NaturalPersonPixPayment();
    const tedPayment: NaturalPersonTedPayment = new NaturalPersonTedPayment();
    const docPayment: NaturalPersonDocPayment = new NaturalPersonDocPayment();

    return new NaturalPersonPaymentFactory(pixPayment, tedPayment, docPayment);
}

/**
 * Essa função recebe uma fábrica de métodos de pagamento que cria os métodoe de pagamento
 * PIX, TED e DOC. Após isso, realiza a criação dos pagamentos da forma adequada.
 *
 * @param factory É uma fábrica de métodos de pagamento.
 */
async function processPayments(factory: IPaymentMethodFactory) {
    const pixService: IPixPayment = factory.createPix();
    const tedService: ITedPayment = factory.createTed();
    const docService: IDocPayment = factory.createDoc();

    const amount: number = 100;

    await pixService.send(amount);
    await tedService.send(amount);
    await docService.send(amount);
}

(async () => {
    await main();
})();
