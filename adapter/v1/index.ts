import { AdapterXboxToPlaystation } from "./domain/adapter-xbox-to-playstation";
import { PlaystationSensor } from "./domain/joystick-sensor/playstation";
import { Sensor } from "./domain/joystick-sensor/sensor";
import { XboxJoystick } from "./domain/xbox-joystick";

function main() {
    const adaptee: Sensor = new PlaystationSensor();
    const adapter: Sensor = new AdapterXboxToPlaystation(adaptee);
    const target: XboxJoystick = new XboxJoystick(adapter);

    target.connect();
    target.aPressed();
    target.bPressed();
    target.xPressed();
    target.yPressed();

    /*
    Adaptee: A Classe que necessita ser adaptada.
    Adapter: O Adaptador, adapta a classe original (Adaptee) para a interface da classe Target.
    Target: O Alvo, define a interface do domínio específico que o cliente utiliza.
    Client: O Cliente, colabora com a interface Target.

    Adaptee: Sensor do Playstation.
    Adapter: Adaptador de Playstation para Xbox.
    Target: Joystick de Xbox.
    Client: Usuário que utiliza o Joystick de Xbox (este arquivo).

    https://medium.com/devpira/adapters-em-typescript-entendendo-o-pattern-a538a44a2df7
    */
}

(() => {
    main();
})();
