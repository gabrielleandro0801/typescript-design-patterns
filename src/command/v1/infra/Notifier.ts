/**
 * Essa é a classe receptora (Receiver) que sabe como enviar as notificações.
 */
export class Notifier {
    async sendEmail(to: string, subject: string, body: string): Promise<void> {
        console.log(`📧 Email enviado para ${to}: ${subject}`);
    }

    async sendSms(to: string, message: string): Promise<void> {
        console.log(`📲 SMS enviado para ${to}: ${message}`);
    }
}
