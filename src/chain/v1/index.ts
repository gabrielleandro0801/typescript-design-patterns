import {
    AccountHolder,
    CheckCandidateDebtsNameHandler,
    CheckCandidateDocumentHandler,
    CheckCandidateMotherNameHandler,
} from "./Handlers";
import { IHandler } from "./IHandler";

/**
 * Este é o método principal.
 *
 * Inicialmente, ele instancia o primeiro handler e, em seguida, monta a cadeia de
 * responsabilidades seguindo a ordem adequada.
 * Após isso, itera sobre os quatro candidatos e aplica a chamada ao método handle para cada.
 *
 * Caso o retorno da execução da cadeia seja uma instância de Left, o handler
 * rejeitou alguma validação.
 * Caso seja Right, todas as validações passaram.
 */
async function main() {
    const checkCandidateDocumentHandler: IHandler<AccountHolder> = new CheckCandidateDocumentHandler();
    checkCandidateDocumentHandler
        .setNext(new CheckCandidateMotherNameHandler())
        .setNext(new CheckCandidateDebtsNameHandler());

    const candidates: AccountHolder[] = [
        {
            name: "valid",
            document: "invalid",
            motherName: "valid",
        },
        {
            name: "valid",
            document: "valid",
            motherName: "invalid",
        },
        {
            name: "invalid",
            document: "valid",
            motherName: "valid",
        },
        {
            name: "valid",
            document: "valid",
            motherName: "valid",
        },
    ];

    for (const candidate of candidates) {
        const response = await checkCandidateDocumentHandler.handle(candidate);

        if (response.isRight()) {
            console.log("Resultado: Candidato aprovado para criação de conta");
            console.log("Candidato:", JSON.stringify(candidate), "\n");

            continue;
        }

        console.error("Resultado: Candidato reprovado\n");
    }
}

(async () => {
    await main();
})();
