import { EmailNotificationCommand, SmsNotificationCommand } from "./infra/Commands";
import { INotificationCommand } from "./infra/INotificationCommand";
import { NotificationInvoker } from "./infra/NotificationInvoker";
import { Notifier } from "./infra/Notifier";

/**
 * Essa é a função principal, que:
 * 1. realiza a instanciação do receptor (Notifier).
 * 2. realiza a instanciação dos comandos (implementações concretas da INotificationCommand).
 * 3. realiza a instanciação do invoker (NotificationInvoker)
 * 4. realiza a chamada ao método [run] do invoker, que irá invocar os comandos registrados.
 */
async function main() {
    const notifier: Notifier = new Notifier();

    const commands: INotificationCommand[] = [
        new EmailNotificationCommand(notifier, ["abc@gmail.com", "Title of the email", "Body of the email"]),
        new SmsNotificationCommand(notifier, ["0000000000000", "Content of the message"]),
    ];

    const notificationInvoker: NotificationInvoker = new NotificationInvoker(commands);
    await notificationInvoker.run();
}

(async () => {
    await main();
})();
