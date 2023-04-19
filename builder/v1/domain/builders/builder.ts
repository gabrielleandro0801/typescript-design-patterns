import { Body, Engine, Wheel } from "../car";

export interface Builder {
    getWheels(): Array<Wheel>;
    getEngine(): Engine;
    getBody(): Body;
}
