export class Wheel {
    private _size;

    set size(size) {
        this._size = size;
    }

    get size() {
        return this._size;
    }
}

export class Engine {
    private _horsepower: number;

    set horsepower(horsepower: number) {
        this._horsepower = horsepower;
    }

    get horsepower(): number {
        return this._horsepower;
    }
}

export class Body {
    private _shape: string;

    set shape(shape: string) {
        this._shape = shape;
    }

    get shape(): string {
        return this._shape;
    }
}

export class Car {
    private _wheels: Array<Wheel> = [];
    private _engine: Engine;
    private _body: Body;

    set wheels(wheels: Array<Wheel>) {
        this._wheels = wheels;
    }

    set engine(engine: Engine) {
        this._engine = engine;
    }

    set body(body: Body) {
        this._body = body;
    }

    getSpecification(): void {
        console.log(`Body shape: [${this._body.shape}]`);
        console.log(`Engine horsepower: [${this._engine.horsepower}]`);
        console.log(`Tires size: [${this._wheels.map((wheel: Wheel) => wheel.size)}]`);
    }
}
