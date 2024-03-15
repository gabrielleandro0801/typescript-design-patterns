import { PlaystationSensor } from "./joystick-sensor/playstation";
import { Sensor } from "./joystick-sensor/sensor";

export class AdapterXboxToPlaystation implements Sensor {
    private readonly playstationSenior: PlaystationSensor;

    constructor(sensor: PlaystationSensor) {
        this.playstationSenior = sensor;
    }

    connect(): void {
        this.playstationSenior.connect();
    }

    receiveButton(xboxButton: string): void {
        const playstationButton: string = this.convertButton(xboxButton);
        this.playstationSenior.receiveButton(playstationButton);
    }

    private convertButton(xboxButton: string): string {
        const options: Map<string, string> = new Map();

        options.set("Y", "Triangle");
        options.set("B", "Circle");
        options.set("A", "Cross");
        options.set("X", "Square");

        const button: string | undefined = options.get(xboxButton);

        if (!button) throw new Error("Invalid button");

        return button;
    }
}
