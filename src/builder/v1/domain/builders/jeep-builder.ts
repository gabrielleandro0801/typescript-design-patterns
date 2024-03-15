import { Builder } from "./builder";
import { Wheel, Engine, Body } from "../car";

export class JeepBuilder implements Builder {
    private readonly _wheels: Array<Wheel>;
    private readonly _engine: Engine;
    private readonly _body: Body;

    constructor() {
        this._wheels = [];
        this._engine = new Engine();
        this._body = new Body();
    }

    getWheels(): Wheel[] {
        for (let i = 0; i < 6; i++) {
            const wheel: Wheel = new Wheel();
            wheel.size = 22;
            this._wheels.push(wheel);
        }

        return this._wheels;
    }

    getEngine(): Engine {
        this._engine.horsepower = 400;
        return this._engine;
    }

    getBody(): Body {
        this._body.shape = "SUV";
        return this._body;
    }
}
