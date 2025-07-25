export interface IPaymentMethod {
    process(): Promise<void>;
}
