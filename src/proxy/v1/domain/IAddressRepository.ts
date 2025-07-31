export type Address = {
    zipCode: string;
    street: string;
    state: string;
};

export interface IAddressRepository {
    getByZipCode(zipCode: string): Promise<Address>;
}
