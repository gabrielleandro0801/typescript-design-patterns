import { IVisitor } from "../visitor/IVisitor";
import { ITransaction } from "./ITransaction";

type DebtorType = "F" | "J";

export { DebtorType as PixDebtorType };

/**
 * Essa classe é a implementação concreta do visitável (ITransaction) para as
 * transações do tipo Pix.
 */
export class Pix implements ITransaction {
    private readonly _amount: number;
    private readonly _debtorType: DebtorType;

    constructor(amount: number, debtorType: DebtorType) {
        this._amount = amount;
        this._debtorType = debtorType;
    }

    get amount(): number {
        return this._amount;
    }

    get debtorType(): DebtorType {
        return this._debtorType;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitPix(this);
    }
}
