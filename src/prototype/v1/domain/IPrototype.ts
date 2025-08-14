/**
 * Esta é a simples interface do Prototype, que é implementada pelas classes que
 * possibilitam a clonagem.
 */
export interface IPrototype<T> {
    clone(): T;
}
