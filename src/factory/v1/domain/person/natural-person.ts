import { Person, PersonType } from "./person";

export class NaturalPerson implements Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    identifier(): PersonType {
        return PersonType.NATURAL;
    }
}
