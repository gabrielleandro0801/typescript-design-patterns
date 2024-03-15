import { Car } from "./domain/car";
import { Director } from "./domain/director";
import { JeepBuilder } from "./domain/builders/jeep-builder";

function main() {
    const director: Director = new Director();

    console.log("===== Creating a Jeep =====");
    director.builder = new JeepBuilder();
    const jeep: Car = director.getCar();
    jeep.getSpecification();

    /*
    Product: É a classe alvo, que será montada pelos métodos da Interface Builder.
    Interface Builder: É a interface que contém os métodos que montarão a estrutura do Product.
    Concrete Builder: São as classes que implementam
    Director: É a classe que manipulará a implementação da classe Builder.
    Client: Usuário que colabora com o Director.

    Product: É a classe Car.
    Interface Builder: É a interface Builder.
    Concrete Builder: É a interface JeepBuilder.
    Director: É a classe Director, que recebe o JeepBuilder e o manipula para a montagem do Car.
    Client: Este arquivo.

    https://sbcode.net/typescript/builder/#builder-uml-diagram
    https://refactoring.guru/design-patterns/builder/typescript/example
    */
}

(() => {
    main();
})();
