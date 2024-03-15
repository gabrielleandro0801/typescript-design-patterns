export interface Sensor {
    connect(): void;
    receiveButton(button: string): void;
}
