import { Person, PersonType } from "./person";

export class LegalPerson implements Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    identifier(): PersonType {
        return PersonType.LEGAL;
    }

}
