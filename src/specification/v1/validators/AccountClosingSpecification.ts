import { Either, left, right } from "../../../result/v1/Either";
import { BankAccount, BankAccountStatus } from "../domain/BankAccount";
import { CompositeSpecification } from "../shared/ISpecification";

export type SpecificationInput = {
    bankAccount: BankAccount;
};

/**
 * Essa única classe é exposta para fazer a validação do cancelamento de conta.
 * As outras são as validações internas realizadas.
 */
export class AccountClosingSpecification extends CompositeSpecification<SpecificationInput> {
    isSatisfiedBy(candidate: SpecificationInput): Either<Error, true> {
        return new BankAccountBalanceMustBeZeroRule()
            .and(new BankAccountStatusMustBeActiveRule())
            .isSatisfiedBy(candidate);
    }
}

class BankAccountBalanceMustBeZeroRule extends CompositeSpecification<SpecificationInput> {
    isSatisfiedBy(candidate: SpecificationInput): Either<Error, true> {
        const { bankAccount } = candidate;

        return bankAccount.balance === 0 ? right(true) : left(new Error("Account balance is not 0"));
    }
}

class BankAccountStatusMustBeActiveRule extends CompositeSpecification<SpecificationInput> {
    isSatisfiedBy(candidate: SpecificationInput): Either<Error, true> {
        const { bankAccount } = candidate;

        return bankAccount.status === BankAccountStatus.ACTIVE ? right(true) : left(new Error("Account is not active"));
    }
}
