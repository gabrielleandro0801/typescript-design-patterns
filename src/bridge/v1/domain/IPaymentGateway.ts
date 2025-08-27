export interface IPaymentGateway {
    pay(amount: number): Promise<void>;
}
