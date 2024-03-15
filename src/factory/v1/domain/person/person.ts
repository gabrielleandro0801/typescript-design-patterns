export enum PersonType {
    LEGAL = "LEGAL",
    NATURAL = "NATURAL",
}

export interface Person {
    name: string;
    identifier(): PersonType;
}
