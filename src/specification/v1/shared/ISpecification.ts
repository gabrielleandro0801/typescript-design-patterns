import { Either, left, right } from "../../../result/v1/Either";

export interface Specification<T> {
    isSatisfiedBy(candidate: T): Either<Error, true>;
    and(other: Specification<T>): Specification<T>;
    or(other: Specification<T>): Specification<T>;
    not(): Specification<T>;
}

/**
 * Esta é uma implementação do Specification Pattern aplicada em cima do Result Patttern
 * do src/result/v1, retornando instâncias de Right para sucesso e Left para falhas.
 *
 * Caso fossem retornados apenas valores booleanos, as validações específicas seriam perdidas.
 * Para o fluxo da aplicação, essas validações podem ser importantes.
 */
export abstract class CompositeSpecification<T> implements Specification<T> {
    abstract isSatisfiedBy(candidate: T): Either<Error, true>;

    public and(other: Specification<T>): Specification<T> {
        return new AndSpecification(this, other);
    }

    public or(other: Specification<T>): Specification<T> {
        return new OrSpecification(this, other);
    }

    public not(): Specification<T> {
        return new NotSpecification(this);
    }
}

class AndSpecification<T> extends CompositeSpecification<T> {
    constructor(
        private readonly one: Specification<T>,
        private readonly another: Specification<T>,
    ) {
        super();
    }

    public isSatisfiedBy(candidate: T): Either<Error, true> {
        const oneResult: Either<Error, true> = this.one.isSatisfiedBy(candidate);
        if (oneResult.isLeft()) {
            return oneResult;
        }

        const anotherResult: Either<Error, true> = this.another.isSatisfiedBy(candidate);
        if (anotherResult.isLeft()) {
            return anotherResult;
        }

        return right(true);
    }
}

class OrSpecification<T> extends CompositeSpecification<T> {
    constructor(
        private readonly one: Specification<T>,
        private readonly another: Specification<T>,
    ) {
        super();
    }

    public isSatisfiedBy(candidate: T): Either<Error, true> {
        const oneResult: Either<Error, true> = this.one.isSatisfiedBy(candidate);
        if (oneResult.isRight()) {
            return right(true);
        }

        const anotherResult: Either<Error, true> = this.another.isSatisfiedBy(candidate);
        if (anotherResult.isRight()) {
            return right(true);
        }

        return oneResult;
    }
}

class NotSpecification<T> extends CompositeSpecification<T> {
    constructor(private readonly specification: Specification<T>) {
        super();
    }

    public isSatisfiedBy(candidate: T): Either<Error, true> {
        const result: Either<Error, true> = this.specification.isSatisfiedBy(candidate);

        return result.isRight() ? left(new Error("Not satisfied")) : right(true);
    }
}
