/**
 * Esse é um decorator para funções síncronas que loga a data e hora pré execução
 * e o tempo total da execução da função alvo.
 */
export function loggingDecorator() {
    function logBeforeAndAfter(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod: Function = descriptor.value;

        descriptor.value = function (this: any, ...args: any[]) {
            const fnName: string = `${this.constructor.name}.${originalMethod.name}`;

            const startTime: Date = new Date();
            console.log(`== Starting execution for fn [${fnName}] at ${startTime.toISOString()} ==`);

            try {
                const response: any = originalMethod.apply(this, args);

                const endTime: Date = new Date();
                const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, endTime);

                console.log(`== Execution for fn [${fnName}] took [${executionTimeInMs}s] ==\n`);

                return response;
            } catch (error) {
                const errorTime: Date = new Date();
                const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, errorTime);

                console.error(`== Failure for fn [${fnName}] took [${executionTimeInMs}s] ==\n`);

                throw error;
            }
        };

        return descriptor;
    }

    return logBeforeAndAfter;
}

/**
 * Esse é um decorator para funções assíncronas que loga a data e hora pré execução
 * e o tempo total da execução da função alvo.
 */
export function asyncLoggingDecorator() {
    function logBeforeAndAfter(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod: Function = descriptor.value;

        descriptor.value = async function (this: any, ...args: any[]) {
            const fnName: string = `${this.constructor.name}.${originalMethod.name}`;

            const startTime: Date = new Date();
            console.log(`== Starting execution for fn [${fnName}] at ${startTime.toISOString()} ==`);

            try {
                const response: any = await originalMethod.apply(this, args);

                const endTime: Date = new Date();
                const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, endTime);

                console.log(`== Execution for fn [${fnName}] took [${executionTimeInMs}s] ==\n`);

                return response;
            } catch (error) {
                const errorTime: Date = new Date();
                const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, errorTime);

                console.error(`== Failure for fn [${fnName}] took [${executionTimeInMs}s] ==\n`);

                throw error;
            }
        };

        return descriptor;
    }

    return logBeforeAndAfter;
}

function calculateExecutionTimeInSeconds(startTime: Date, endTime: Date): number {
    function millisecondsToSeconds(ms: number): number {
        return ms / 1000;
    }

    const executionTimeInMs: number = endTime.getTime() - startTime.getTime();

    return millisecondsToSeconds(executionTimeInMs);
}
