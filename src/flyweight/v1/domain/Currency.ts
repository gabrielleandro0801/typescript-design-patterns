/**
 * Esta é a classe compartilhável, que pode acabar sendo instanciada N vezes e causar um
 * uso inadequado de memória.
 */
export class Currency {
    private readonly _code: string;
    private readonly _symbol: string;

    constructor({ code, symbol }: { code: string; symbol: string }) {
        console.log("Creating new Currency");

        this._code = code;
        this._symbol = symbol;
    }

    get code(): string {
        return this._code;
    }
    get symbol(): string {
        return this._symbol;
    }

    toJson() {
        return {
            code: this._code,
            symbol: this._symbol,
        };
    }
}
