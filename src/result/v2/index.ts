import { Either } from "./either";
import { DivisionByZeroException, InvalidArgumentException, MathException } from "../math-exceptions";

class Math {
    static divide(firstValue: number, secondValue: number): Either<number, MathException> {
        if (secondValue === 0) return Either.fail(new DivisionByZeroException());

        if (new Set([firstValue, secondValue]).has(NaN)) return Either.fail(new InvalidArgumentException());

        return Either.success(firstValue / secondValue);
    }
}

(() => {
    const argsList: Array<any> = [
        {
            firstValue: 10,
            secondValue: 0,
        },
        {
            firstValue: NaN,
            secondValue: 10,
        },
        {
            firstValue: 10,
            secondValue: 10,
        },
    ];

    for (const args of argsList) {
        const response: Either<number, MathException> = Math.divide(args.firstValue, args.secondValue);

        if (response.isError()) {
            console.log(`Error: ${response.error.message}`);
        } else {
            console.log(`Success: ${response.success}`);
        }
    }

    /*
    A função [divide] da class Math sempre retorna uma instância da classe Either.

    O cliente sempre verifica se o retorno foi um sucesso ou falha para poder seguir com o processamento.
    Essa verificação é feita através dos métodos [isError] e [isSuccess].

    https://medium.com/@wgyxxbf/result-pattern-a01729f42f8c#:~:text=The%20%E2%80%9CResult%20Pattern%E2%80%9D%20is%20an,flow%20to%20run%20more%20smoothly.
    */
})();
