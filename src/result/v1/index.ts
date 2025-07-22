import { Either, left, right } from "./Either";
import { DivisionByZeroException, InvalidArgumentException, MathException } from "../math-exceptions";

class Math {
    /**
     * O método divide não lança exceções quando alguma de suas validações falha
     * Ao invés disso, sempre retorna uma instância da classe Left ou Right.
     *
     * Left para falha e Right para sucesso.
     *
     * Assim, o cliente do método não necessita de um try/catch envelopando a chamada
     * mas apenas verifica se o retorno é uma instância de Left ou Right.
     */
    static divide(firstValue: number, secondValue: number): Either<MathException, number> {
        if (secondValue === 0) {
            return left(new DivisionByZeroException());
        }

        if (new Set([firstValue, secondValue]).has(NaN)) {
            return left(new InvalidArgumentException());
        }

        return right(firstValue / secondValue);
    }
}

function main() {
    const argsList: Parameters<typeof Math.divide>[] = [
        [10, 0],
        [NaN, 10],
        [10, 10],
    ];

    for (const args of argsList) {
        const response: Either<MathException, number> = Math.divide(...args);

        if (response.isLeft()) {
            console.log(`Error: ${response.error.message}`);
        } else {
            console.log(`Success: ${response.success}`);
        }
    }
}

(() => {
    main();
})();
