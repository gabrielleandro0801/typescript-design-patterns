/**
 * Essa a interface para o tipo de pagamento PIX.
 */
export interface IPixPayment {
    send(amount: number): Promise<void>;
}

/**
 * Essa a interface para o tipo de pagamento TED.
 */
export interface ITedPayment {
    send(amount: number): Promise<void>;
}

/**
 * Essa a interface para o tipo de pagamento DOC.
 */
export interface IDocPayment {
    send(amount: number): Promise<void>;
}
