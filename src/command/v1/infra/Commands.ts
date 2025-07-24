import { INotificationCommand } from "./INotificationCommand";
import { Notifier } from "./Notifier";

/**
 * Essa é uma implementação concreta da interface [INotificationCommand].
 *
 * Ela realiza notificações via email.
 */
export class EmailNotificationCommand implements INotificationCommand {
    private readonly notifier: Notifier;
    private readonly args: Parameters<Notifier["sendEmail"]>;

    constructor(notifier: Notifier, args: Parameters<Notifier["sendEmail"]>) {
        this.notifier = notifier;
        this.args = args;
    }

    async execute(): Promise<void> {
        await this.notifier.sendEmail(...this.args);
    }
}

/**
 * Essa é uma implementação concreta da interface [INotificationCommand].
 *
 * Ela realiza notificações via SMS.
 */
export class SmsNotificationCommand implements INotificationCommand {
    private readonly notifier: Notifier;
    private readonly args: Parameters<Notifier["sendSms"]>;

    constructor(notifier: Notifier, args: Parameters<Notifier["sendSms"]>) {
        this.notifier = notifier;
        this.args = args;
    }

    async execute(): Promise<void> {
        await this.notifier.sendSms(...this.args);
    }
}
