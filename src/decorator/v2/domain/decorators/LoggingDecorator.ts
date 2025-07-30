import { IPixService } from "../IPixService";
import { PixServiceDecorator } from "./PixServiceDecorator";

/**
 * Essa implementação concreta da classe abstrata PixServiceDecorator recebe
 * a instância de IPixService no construtor e, na implementação do método [send], envelopa
 * a chamada ao [send] original com logs antes e depois, calculando o tempo de execução.
 */
export class LoggingDecorator extends PixServiceDecorator {
    constructor(pixService: IPixService) {
        super(pixService);
    }

    async send(amount: number): Promise<void> {
        const startTime: Date = new Date();

        try {
            console.log(
                `== Starting execution for fn [${this.pixService.constructor.name}.send] at ${startTime.toISOString()} ==`,
            );

            await this.pixService.send(amount);

            const endTime: Date = new Date();
            const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, endTime);

            console.log(
                `== Execution for fn [${this.pixService.constructor.name}.send] took [${executionTimeInMs}s] ==\n`,
            );
        } catch (error) {
            const errorTime: Date = new Date();
            const executionTimeInMs: number = calculateExecutionTimeInSeconds(startTime, errorTime);

            console.error(
                `== Failure for fn [${this.pixService.constructor.name}.send] took [${executionTimeInMs}s] ==\n`,
            );

            throw error;
        }
    }
}

function calculateExecutionTimeInSeconds(startTime: Date, endTime: Date): number {
    function millisecondsToSeconds(ms: number): number {
        return ms / 1000;
    }

    const executionTimeInMs: number = endTime.getTime() - startTime.getTime();

    return millisecondsToSeconds(executionTimeInMs);
}
