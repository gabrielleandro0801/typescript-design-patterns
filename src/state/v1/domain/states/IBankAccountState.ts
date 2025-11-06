export type Result<E, S> =
    | {
          status: "error";
          error: E;
      }
    | {
          status: "success";
          value: S;
      };

export type States = "ACTIVE" | "BLOCKED" | "CLOSED";

/**
 * Esta é a interface de um estado de conta bancária.
 *
 * Os métodos de depósito e saque são aplicados em cima do type Result (baseado no Result Pattern)
 * para indicar se a operação deu certo ou não.
 */
export interface IBankAccountState {
    get name(): States;
    deposit(amount: number): Result<Error, unknown>;
    withdraw(amount: number): Result<Error, unknown>;
}
