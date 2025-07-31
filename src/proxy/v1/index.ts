import { Fetch } from "../../adapter/v1/infra/Fetch";
import { IHttpClient } from "../../adapter/v1/infra/IHttpClient";
import { AddressHttpRepository } from "./domain/AddressHttpRepository";
import { AddressRedisRepository } from "./domain/AddressRedisRepository";
import { Address, IAddressRepository } from "./domain/IAddressRepository";

async function main() {
    const httpClient: IHttpClient = new Fetch();

    const addressHttpRepository: IAddressRepository = new AddressHttpRepository(httpClient);
    const addressRedisRepository: IAddressRepository = new AddressRedisRepository(addressHttpRepository);

    const firstAddress: Address = await addressRedisRepository.getByZipCode("01310930");
    console.log(firstAddress);

    const secondAddress: Address = await addressRedisRepository.getByZipCode("01310930");
    console.log(secondAddress);
}

(async () => {
    await main();
})();
