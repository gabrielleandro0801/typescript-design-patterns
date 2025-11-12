import { IComponent } from "./IComponent";

/**
 * Este é o objeto Composto (Composite).
 * É o objeto do começo e meio da árvore, ou seja, possui filhos.
 *
 * Ele representa um Grupo de Caixinhas do Nubank (Box).
 */
export class BoxGroup implements IComponent {
    private _components: Set<IComponent>;
    private _name: string;

    constructor(name: string) {
        this._name = name;
        this._components = new Set<IComponent>();
    }

    get name(): string {
        return this._name;
    }

    get balance(): number {
        let totalBalance: number = 0;

        for (const component of this._components) {
            totalBalance += component.balance;
        }

        return totalBalance;
    }

    get structure(): {
        [x: string]: {};
    } {
        const tree = {
            [this._name]: {},
        };

        for (const component of this._components) {
            tree[this._name] = { ...tree[this._name], ...component.structure };
        }

        return tree;
    }

    add(component: IComponent): this {
        this._components.add(component);

        return this;
    }
}
