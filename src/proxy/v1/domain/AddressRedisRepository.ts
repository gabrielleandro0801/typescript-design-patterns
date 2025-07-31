import { Address, IAddressRepository } from "./IAddressRepository";

const mockCache: { [zipCode: string]: Address } = {};

/**
 * Essa classe atua como um proxy para a HttpRepository.
 *
 * Quando o valor se encontra no cache, a classe HttpRepository não é invocada.
 *
 * Quando não se encontra, a classe HttpRepository é invocada e o valor é posteriormente
 * persistido no cache.
 */
export class AddressRedisRepository implements IAddressRepository {
    private readonly httpRepository: IAddressRepository;

    constructor(httpRepository: IAddressRepository) {
        this.httpRepository = httpRepository;
    }

    async getByZipCode(zipCode: string): Promise<Address> {
        const cachedAddress: Address = await this.getFromCache(zipCode);

        if (cachedAddress) {
            console.log("Obtained address on cache");

            return cachedAddress;
        }

        console.log("Getting address on httpRepository");
        const address: Address = await this.httpRepository.getByZipCode(zipCode);

        console.log("Setting address into cache");
        this.setIntoCache(zipCode, address);

        return address;
    }

    /**
     * Simula busca no Redis.
     */
    private async getFromCache(zipCode: string): Promise<Address> {
        return mockCache[zipCode];
    }

    /**
     * Simula inserção no Redis.
     */
    private async setIntoCache(zipCode: string, address: Address): Promise<void> {
        mockCache[zipCode] = address;
    }
}
