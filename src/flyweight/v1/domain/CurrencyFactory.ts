import { Currency } from "./Currency";

/**
 * Essa é a fábrica de moedas (Currency). Ela utiliza cache para reaproveitar instâncias e evitar a
 * criação de novos objetos a todo momento.
 */
export class CurrencyFactory {
    private static _currencies: Map<string, Currency> = new Map();

    /**
     * Quando já existe uma moeda (Currency) criada no atributo privado "_currencies"
     * este método a reaproveita ao invés de criar um novo objeto com as mesmas propriedades.
     */
    static getCurrency(params: ConstructorParameters<typeof Currency>): Currency {
        const { code } = params[0];

        if (!this._currencies.has(code)) {
            this._currencies.set(code, new Currency(...params));
        }

        return this._currencies.get(code);
    }
}
