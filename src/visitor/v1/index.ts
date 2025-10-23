import { ITransaction } from "./transaction/ITransaction";
import { Boleto } from "./transaction/Boleto";
import { Pix } from "./transaction/Pix";
import { Ted } from "./transaction/Ted";
import { BradescoTransactionVisitor } from "./visitor/BradescoTransactionVisitor";
import { ItauTransactionVisitor } from "./visitor/ItauTransactionVisitor";
import { IVisitor } from "./visitor/IVisitor";

/**
 * Este é o método principal.
 *
 * Inicialmente são instanciadas as transações visitáveis e, em seguida, os
 * visitantes.
 *
 * Por fim, cada visitante itera sobre as transações visitando-as, realizando a
 * cobrança de tarifa de acordo com sua maneira.
 */
function main() {
    const ted: ITransaction = new Ted(10);
    const pix: ITransaction = new Pix(10, "J");
    const boleto: ITransaction = new Boleto(10);

    const transactions: ITransaction[] = [ted, pix, boleto];

    const bradescoVisitor: IVisitor = new BradescoTransactionVisitor();
    const itauVisitor: IVisitor = new ItauTransactionVisitor();

    /**
     * Tarifas calculadas no Bradesco
     */
    transactions.map((transaction: ITransaction) => transaction.accept(bradescoVisitor));

    /**
     * Tarifas calculadas no Itaú
     */
    transactions.map((transaction: ITransaction) => transaction.accept(itauVisitor));
}

(() => {
    main();
})();
