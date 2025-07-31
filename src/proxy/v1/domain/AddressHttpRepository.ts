import { BrasilApiGetCepResponse } from "../../../adapter/v1";
import { IHttpClient } from "../../../adapter/v1/infra/IHttpClient";
import { Address, IAddressRepository } from "./IAddressRepository";

export class AddressHttpRepository implements IAddressRepository {
    private readonly httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
        this.httpClient = httpClient;
    }

    async getByZipCode(zipCode: string): Promise<Address> {
        const { statusCode, body } = await this.httpClient.get<BrasilApiGetCepResponse>({
            url: `https://brasilapi.com.br/api/cep/v1/${zipCode}`,
        });

        if (statusCode !== 200) {
            throw new Error("Invalid response");
        }

        return {
            state: body.state,
            street: body.street,
            zipCode: body.cep,
        };
    }
}
