import { Sensor } from "./sensor";

export class PlaystationSensor implements Sensor {

    connect(): void {
        console.log("A new joystick was connected to Playstation");
    }

    receiveButton(button: string): void {
        console.log(`${button} was pressed!`);
    }

}
