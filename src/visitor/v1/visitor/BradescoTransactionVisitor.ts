import { Boleto } from "../transaction/Boleto";
import { Pix } from "../transaction/Pix";
import { Ted } from "../transaction/Ted";
import { IVisitor } from "./IVisitor";

/**
 * Essa classe é a implementação concreta do visitante (IVisitor) para as
 * transações realizadas no Bradesco.
 *
 * Ele realiza a cobrança de tarifa para cada tipo de transação de acordo com sua maneira.
 */
export class BradescoTransactionVisitor implements IVisitor {
    /**
     * Tarifa de 10% para transações TED no Bradesco.
     */
    visitTed(candidate: Ted): number {
        const charge: number = candidate.amount * 0.1;
        console.log(
            `BradescoTransactionVisitor | A tarifa para uma TED é 30% da transação de R$${candidate.amount}, resultando em R$${charge}`,
        );

        return charge;
    }

    /**
     * Tarifa fixa de R$0 para transações Pix no Bradesco.
     */
    visitPix(candidate: Pix): number {
        console.log(`BradescoTransactionVisitor | A tarifa para um Pix é fixa em R$0`);
        return 0;
    }

    /**
     * Tarifa fixa de R$7 para pagamentos de Boleto no Bradesco.
     */
    visitBoleto(candidate: Boleto): number {
        console.log(`BradescoTransactionVisitor | A tarifa para um Boleto é fixa em R$17`);

        return 7;
    }
}
