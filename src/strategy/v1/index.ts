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

    /*
    Interface Strategy: É a interface responsável por definir o método que as classes 
    concretas devem implementar.
    Concrete Class: São as classes concretas, que implementarão a Interface Strategy.
    Context Class: É a classe de contexto, que manipulará a Interface Strategy e a
    executará.
    Client: Usuário que manipula os objetos.

    Interface Strategy: É a interface IMailSender.
    Concrete Class: São as classes FakeMailSenderImpl e TrapSenderImpl.
    Context Class: É a classe MailSender.
    Client: Este arquivo.

    https://luby.com.br/desenvolvimento/software/design-pattern-strategy-com-typescript/
    https://sbcode.net/typescript/strategy/#strategy-uml-diagram
    */
}

(async () => {
    await main();
})();
