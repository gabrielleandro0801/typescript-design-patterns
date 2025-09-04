import { Currency } from "./Currency";
import { CurrencyFactory } from "./CurrencyFactory";

export class Money {
    private readonly _amount: string;
    private readonly _currency: Currency;

    constructor(amount: string, currencyParams: ConstructorParameters<typeof Currency>) {
        this._amount = amount;
        this._currency = CurrencyFactory.getCurrency(currencyParams);
    }

    get amount(): string {
        return this._amount;
    }

    get currency(): Currency {
        return this._currency;
    }

    toString() {
        return `${this._currency.symbol}${this._amount} em ${this._currency.code}`;
    }
}
