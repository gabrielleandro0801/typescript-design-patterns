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
}

(() => {
    main();
})();
