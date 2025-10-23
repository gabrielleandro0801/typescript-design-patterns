import { IVisitor } from "../visitor/IVisitor";

/**
 * Esta é a interface do objeto "visitável", no caso, uma transação.
 *
 * Todas as implementações deve possuir o **getter** name e o método **accept**
 * que receberá um visitante.
 */
export interface ITransaction {
    get amount(): number;
    accept(visitor: IVisitor): number;
}
