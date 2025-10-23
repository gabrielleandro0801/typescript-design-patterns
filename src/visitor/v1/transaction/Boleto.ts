import { IVisitor } from "../visitor/IVisitor";
import { ITransaction } from "./ITransaction";

/**
 * Essa classe é a implementação concreta do visitável (ITransaction) para as
 * transações do tipo Boleto.
 */
export class Boleto implements ITransaction {
    private readonly _amount: number;

    constructor(amount: number) {
        this._amount = amount;
    }

    get amount(): number {
        return this._amount;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitBoleto(this);
    }
}
