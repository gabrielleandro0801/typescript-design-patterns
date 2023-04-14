import { Car } from "./domain/car";
import { Director } from "./domain/director";
import { JeepBuilder } from "./domain/builders/jeep-builder";

function main() {
    const director: Director = new Director();

    console.log("===== Creating a Jeep =====");    
    director.builder = new JeepBuilder();
    const jeep: Car = director.getCar();
    jeep.getSpecification();
}

(() => {
    main();
})()
