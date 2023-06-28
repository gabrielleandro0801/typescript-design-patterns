import { PersonFactory } from "./domain/person/factory";
import { Person, PersonType } from "./domain/person/person";

function main() {
    const owner: Person = PersonFactory.create(PersonType.NATURAL, "Luiz")
    const liquorStore: Person = PersonFactory.create(PersonType.LEGAL, "Liquor Store");

    console.log(`${owner.name} is a ${owner.identifier()} person`);
    console.log(`${liquorStore.name} is a ${liquorStore.identifier()} person`);
}

(() => {
    main();
})();
