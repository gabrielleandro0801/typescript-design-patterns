import { Either, right } from "../../result/v1/Either";

/**
 * Esta é a interface base que os handlers devem implementar. Ela possui os métodos:
 * * **setNext** para definir o próximo handler da cadeia.
 * * **handle** para lidar com o processamento do elemento de alguma maneira.
 */
export interface IHandler<T> {
    setNext(handler: IHandler<T>): IHandler<T>;
    handle(candidate: T): Promise<Either<Error, T>>;
}

/**
 * Esta é a classe abstrata que as implementações concretas se estenderão. Desta forma,
 * evitará a repetição de código do atributo **next** e da implementação do método
 * **setNext**, que é comum para todos.
 */
export abstract class BaseHandler<T> implements IHandler<T> {
    protected next: IHandler<T>;

    setNext(handler: IHandler<T>): IHandler<T> {
        this.next = handler;

        return handler;
    }

    async handle(candidate: T): Promise<Either<Error, T>> {
        if (this.next) {
            return await this.next.handle(candidate);
        }

        return right(candidate);
    }
}
