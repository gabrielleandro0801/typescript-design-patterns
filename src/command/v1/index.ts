import { CommandOne } from "./domain/command-one";
import { CommandTwo } from "./domain/command-two";
import { Invoker } from "./domain/invoker";
import { Receptor } from "./domain/receptor";

function main() {
    const receiver = new Receptor();

    const commandOne = new CommandOne(receiver);
    const commandTwo = new CommandTwo(receiver);

    const invoker = new Invoker();
    invoker.register("1", commandOne);
    invoker.register("2", commandTwo);

    invoker.execute("1");
    invoker.execute("2");
    invoker.execute("3");

    /*
    Receiver: A classe mediadora que executará o comando.
    Command: A classe que implementa a interface Command, possuindo o método execute.
    Invoker: A classe mediadora, que receberá os comandos via o método "register" e os executará
    através do método "execute".
    Client: O arquivo que terá conhecimento do Receiver, dos Commands e do Invoker.

    Receiver: A classe Receptor.
    Command: São os comandos 1 e 2.
    Invoker: A classe Invoker.
    Client: Este arquivo. 

    https://medium.com/design-patterns-in-typescript/command-pattern-in-typescript-c3a2cfe588ea
    */
}

(() => {
    main();
})();
