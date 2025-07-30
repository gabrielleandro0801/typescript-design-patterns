import { IPixService } from "../IPixService";

/**
 * Nesta implementação, os decorators não são em forma de notação com "@",
 * mas são instâncias que envelopam a classe alvo.
 *
 * Esta classe abstrata implementa a interface IPixService, que é a desejada.
 * Além disso, ele recebe a instância concreta no construtor, que será invocada.
 */
export abstract class PixServiceDecorator implements IPixService {
    protected pixService: IPixService;

    constructor(pixService: IPixService) {
        this.pixService = pixService;
    }

    abstract send(amount: number): Promise<void>;
}
