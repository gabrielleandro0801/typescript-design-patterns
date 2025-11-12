import { Box } from "./domain/Box";
import { BankAccount } from "./domain/BankAccount";
import { BoxGroup } from "./domain/BoxGroup";

/**
 * Esta é a função principal.
 *
 * Inicialmente ela cria a conta bancária. Após isso, ela cria as caixinhas
 * e suas estruturas com subcaixinhas, se necessário. Após isso, ela as adiciona
 * na conta bancária e solicita a impressão da estrutura final.
 */
function main() {
    const nubankAccount: BankAccount = new BankAccount();

    const myFirstBox: Box = new Box("Minha primeira caixinha", 100);

    const boxesFrom2024: BoxGroup = new BoxGroup("Caixinhas 2024")
        .add(new Box("Reserva de emergência", 5_000))
        .add(new Box("Reforma da casa", 10_000))
        .add(
            new BoxGroup("Viagens")
                .add(new Box("Paraguai", 3_000))
                .add(new Box("Chile", 3_000))
                .add(new Box("Argentina", 7_000)),
        );

    const boxesFrom2025: BoxGroup = new BoxGroup("Caixinhas 2025")
        .add(new Box("Reserva de emergência", 1_000))
        .add(new Box("Presentes de Natal", 1_000));

    nubankAccount.add(myFirstBox);

    /**
     * Por alguma necessidade, foi debitado o valor que estava na
     * "Minha Primeira Caixinha".
     */
    myFirstBox.withdraw(100);

    nubankAccount.add(boxesFrom2024);
    nubankAccount.add(boxesFrom2025);

    nubankAccount.printStructure();
}

(() => {
    main();
})();
