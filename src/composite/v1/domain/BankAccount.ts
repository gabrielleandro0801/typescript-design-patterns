import { IComponent } from "./IComponent";

/**
 * Este é o objeto raiz (Root).
 *
 * Ele representa uma conta bancária do Nubank e é composto por N componentes (IComponent).
 *
 * Quando se é consultado o saldo dele, ele não sabe se está somando uma caixinha
 * ou um grupo de caixinhas.
 */
export class BankAccount {
    private _components: Set<IComponent>;

    constructor() {
        this._components = new Set<IComponent>();
    }

    get totalBalance(): number {
        let totalBalance: number = 0;

        for (const component of this._components) {
            totalBalance += component.balance;
        }

        return totalBalance;
    }

    add(component: IComponent): this {
        this._components.add(component);

        return this;
    }

    printStructure(): void {
        console.log("💳 Estrutura da Conta Nubank");

        let tree = {};
        for (const component of this._components) {
            tree = { ...tree, ...component.structure };
        }

        console.log(JSON.stringify(tree, null, 4));
        console.log(`\nTotal: R$ ${this.totalBalance.toFixed(2)}`);
    }
}
