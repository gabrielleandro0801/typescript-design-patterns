export interface IPixService {
    send(amount: number): Promise<void>;
}
