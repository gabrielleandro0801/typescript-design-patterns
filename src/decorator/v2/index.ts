import { LoggingDecorator } from "./domain/decorators/LoggingDecorator";
import { PixServiceDecorator } from "./domain/decorators/PixServiceDecorator";
import { IPixService } from "./domain/IPixService";
import { PixService } from "./domain/PixService";

/**
 * Essa é a função principal, que:
 * 1. realiza a instanciação da implementação concreta da interface IPixService.
 * 2. instancia os decoradores da classe PixService, que estendem da classe abstrata PixServiceDecorator.
 * 3. realiza a chamada ao método [send] da instância dos decoradores, que, encapsuladamente, invocarão
 * o método [send] original.
 *
 * A instanciação dos decoradores poderia acontecer de forma encadeada, por exemplo:
 *
 * ``` typescript
 * const pixServiceDecorated: PixServiceDecorator = new LoggingDecorator(
 *   new OtherPixServiceDecorator(
 *     new AnotherPixServiceDecorator(basePixService)
 *   )
 * );
 * ```
 */
async function main() {
    const basePixService: IPixService = new PixService();

    const pixServiceDecorated: PixServiceDecorator = new LoggingDecorator(basePixService);
    await pixServiceDecorated.send(10);
}

(async () => {
    await main();
})();
