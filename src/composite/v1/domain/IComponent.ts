/**
 * Esta interface representa um componente.
 * Ela servirá tanto para uma caixinha (Box) quanto para um grupo (BoxGroup).
 */
export interface IComponent {
    get name(): string;
    get balance(): number;
    get structure(): {
        [x: string]: {};
    };
}
