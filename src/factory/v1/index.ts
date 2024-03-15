import { PersonFactory } from "./domain/person/factory";
import { Person, PersonType } from "./domain/person/person";

function main() {
    const owner: Person = PersonFactory.create(PersonType.NATURAL, "Luiz");
    const liquorStore: Person = PersonFactory.create(PersonType.LEGAL, "Liquor Store");

    console.log(`${owner.name} is a ${owner.identifier()} person`);
    console.log(`${liquorStore.name} is a ${liquorStore.identifier()} person`);

    /*
    Abstract Product: Interface, contrato que será retornado pela fábrica.
    Concrete Product: São as classes dos objetos reais, que implementam a AbstractProduct.
    Factory: A fábrica, que fara a instanciação dos objetos.
    Client: O Cliente, colabora com a fábrica.

    Abstract Product: É a Interface Person.
    Concrete Product: São as interfaces LegalPerson e NaturalPerson.
    Factory: É o PersonFactory, que a partir do método "create" retornará uma instância de
    LegalPerson ou NaturalPerson.
    Client: Este arquivo.

    https://dev.to/luizcalaca/typescript-factory-design-pattern-in-practice-uml-6g9
    */
}

(() => {
    main();
})();
