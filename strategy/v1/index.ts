import { FakeMailSenderImpl } from "./infra/mail-sender/fake";
import { IMailSender } from "./infra/mail-sender/sender";
import { MailSender } from "./infra/mail-sender/strategy";
import { TrapSenderImpl } from "./infra/mail-sender/trap";

async function main() {
    const fakeMail: IMailSender = new FakeMailSenderImpl();
    const trapMail: IMailSender = new TrapSenderImpl();

    const mailSender: MailSender = new MailSender(fakeMail);
    await mailSender.send({
        to: "someone@mail.com",
        from: "anotherone@mail.com",
        subject: "Trap message",
        body: "<h1>Sent from fake</h1>",
    });

    mailSender.mailProvider = trapMail;
    await mailSender.send({
        to: "someone@mail.com",
        from: "anotherone@mail.com",
        subject: "Trap message",
        body: "<h1>Sent from trap</h1>",
    });
}

(async () => {
    await main();
})();
