import { Command } from "./command";

export class Invoker {
    private commands: {
        [id: string]: Command
    };

    constructor() {
        this.commands = {};
    }

    register(commandName: string, command: Command): void {
        this.commands[commandName] = command;
    }

    execute(commandName: string) {
        if (commandName in this.commands) {
            this.commands[commandName].execute();
            return;
        }

        console.log("Command not found");
    }

}
