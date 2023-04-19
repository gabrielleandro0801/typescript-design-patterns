import { Sensor } from "./sensor";

export class XboxSensor implements Sensor {

    connect(): void {
        console.log(`A New Joystick was connected to Xbox`);
    }

    receiveButton(button: string): void {
        console.log(`${button} was pressed!`)
    }

}
