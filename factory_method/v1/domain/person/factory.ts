import { orElseThrow } from "../../or-else-throw";
import { LegalPerson } from "./legal-person";
import { NaturalPerson } from "./natural-person";
import { Person, PersonType } from "./person";

export class PersonFactory {
    static create(type: PersonType, name: string): Person {
        const resolvers: Map<string, Function> = new Map();

        resolvers.set(PersonType.LEGAL, () => new LegalPerson(name));
        resolvers.set(PersonType.NATURAL, () => new NaturalPerson(name));

        const resolver = orElseThrow(() => resolvers.get(type), "Invalid person type");
        return resolver();
    }
}
