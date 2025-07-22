import { Fetch } from "./infra/Fetch";
import { HttpResponse, IHttpClient } from "./infra/IHttpClient";

type BrasilApiGetCepResponse = {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    service: string;
};

/**
 * A classe Fetch contém integrações com um módulo do Node, o "fetch".
 *
 * Então, através da interface "IHttpClient" é estipulado um contrato com os métodos HTTP.
 * Com isso, a classe cliente que receber a instância dessa classe estará protegida pela interface.
 * Sem conhecer a implementação detalhada da instância, que poderia ser as bibliotecas Axios, Undici, etc.
 */
function main() {
    const httpClient: IHttpClient = new Fetch();

    httpClient
        .get<BrasilApiGetCepResponse>({
            url: "https://brasilapi.com.br/api/cep/v1/01310930",
        })
        .then((response: HttpResponse<BrasilApiGetCepResponse>) => console.log(response));
}

(() => {
    main();
})();
