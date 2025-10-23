import { Boleto } from "../transaction/Boleto";
import { Pix } from "../transaction/Pix";
import { Ted } from "../transaction/Ted";
import { IVisitor } from "./IVisitor";

/**
 * Essa classe é a implementação concreta do visitante (IVisitor) para as
 * transações realizadas no Itaú.
 *
 * Ele realiza a cobrança de tarifa para cada tipo de transação de acordo com sua maneira.
 */
export class ItauTransactionVisitor implements IVisitor {
    /**
     * Tarifa de 30% para transações TED no Itaú.
     */
    visitTed(candidate: Ted): number {
        const charge: number = candidate.amount * 0.3;
        console.log(
            `ItauTransactionVisitor | A tarifa para uma TED é 30% da transação de R$${candidate.amount}, resultando em R$${charge}`,
        );

        return charge;
    }

    /**
     * Tarifa fixa de R$0 para transações Pix de Pessoa Física no Itaú.
     * Tarifa de 20% para transações Pix de Pessoa Jurídica no Itaú.
     */
    visitPix(candidate: Pix): number {
        if (candidate.debtorType === "F") {
            console.log(`ItauTransactionVisitor | A tarifa para um Pix de PF é fixa em R$0`);

            return 0;
        }

        const charge: number = candidate.amount * 0.2;
        console.log(
            `ItauTransactionVisitor | A tarifa para um Pix de PJ é 20% da transação de R$${candidate.amount}, resultando em R$${charge}`,
        );

        return charge;
    }

    /**
     * Tarifa fixa de R$17 para pagamentos de Boleto no Itaú.
     */
    visitBoleto(candidate: Boleto): number {
        console.log(`ItauTransactionVisitor | A tarifa para um Boleto é fixa em R$17`);

        return 17;
    }
}
