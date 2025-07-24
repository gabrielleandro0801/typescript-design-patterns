import { INotificationCommand } from "./INotificationCommand";

/**
 * Esta é a classe Invoker, responsável pelo gerenciamento dos comandos registrados.
 */
export class NotificationInvoker {
    private commands: INotificationCommand[];

    constructor(commands: INotificationCommand[]) {
        this.commands = commands;
    }

    async run() {
        for (const command of this.commands) {
            await command.execute();
        }
    }
}
