import { Either } from "./Either";
import { DivisionByZeroException, InvalidArgumentException, MathException } from "../math-exceptions";

class Math {
    /**
     * A única diferença para a v1 é que não há duas classes, uma Left e uma Right,
     * mas apenas uma única classe contendo métodos estáticos.
     */
    static divide(firstValue: number, secondValue: number): Either<number, MathException> {
        if (secondValue === 0) {
            return Either.fail(new DivisionByZeroException());
        }

        if (new Set([firstValue, secondValue]).has(NaN)) {
            return Either.fail(new InvalidArgumentException());
        }

        return Either.success(firstValue / secondValue);
    }
}

function main() {
    const argsList: Parameters<typeof Math.divide>[] = [
        [10, 0],
        [NaN, 10],
        [10, 10],
    ];

    for (const args of argsList) {
        const response: Either<number, MathException> = Math.divide(...args);

        if (response.isError()) {
            console.log(`Error: ${response.error.message}`);
        } else {
            console.log(`Success: ${response.success}`);
        }
    }
}

(() => {
    main();
})();
