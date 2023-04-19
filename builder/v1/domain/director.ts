import { Builder } from "./builders/builder";
import { Car } from "./car";

export class Director {
    private _builder: Builder;

    set builder(builder: Builder) {
        this._builder = builder;
    }

    getCar(): Car {
        const car: Car = new Car();

        car.wheels = this._builder.getWheels();
        car.engine = this._builder.getEngine();
        car.body = this._builder.getBody();

        return car;
    }

}
