import { Either, left } from "../../result/v1/Either";
import { BaseHandler } from "./IHandler";

export type AccountHolder = {
    name: string;
    document: string;
    motherName: string;
};

/**
 * Essa implementação concreta do BaseHandler valida se o documento fornecido
 * é um CPF válido. Caso não seja , retorna uma instância de Left. Se não,
 * chama o próximo da cadeia.
 */
export class CheckCandidateDocumentHandler extends BaseHandler<AccountHolder> {
    async handle(candidate: AccountHolder): Promise<Either<Error, AccountHolder>> {
        if (candidate.document === "invalid") {
            console.warn("Candidato possui CPF inválido");

            return left(new Error(`CPF must have 11 characters`));
        }

        return super.handle(candidate);
    }
}

/**
 * Essa implementação concreta do BaseHandler valida se o nome da mãe fornecido
 * condiz com o cadastrado na Receita Federal. Caso não, retorna uma instância de Left.
 * Se não, chama o próximo da cadeia.
 */
export class CheckCandidateMotherNameHandler extends BaseHandler<AccountHolder> {
    async handle(candidate: AccountHolder): Promise<Either<Error, AccountHolder>> {
        if (candidate.motherName === "invalid") {
            console.warn("O nome da mãe do candidato não condiz com a Receita Federal");

            return left(new Error(`Given Mother Name is different from the registered on Federal Revenue`));
        }

        return super.handle(candidate);
    }
}

/**
 * Essa implementação concreta do BaseHandler valida se o nome do portador está no
 * Serasa. Caso esteja, retorna uma instância de Left. Se não, chama o próximo da cadeia.
 */
export class CheckCandidateDebtsNameHandler extends BaseHandler<AccountHolder> {
    async handle(candidate: AccountHolder): Promise<Either<Error, AccountHolder>> {
        if (candidate.name === "invalid") {
            console.warn("Candidato está com o nome sujo");

            return left(new Error(`Candidate has open debts`));
        }

        return super.handle(candidate);
    }
}
