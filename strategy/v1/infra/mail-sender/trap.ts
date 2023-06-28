import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { MessageProps } from "../message";
import { IMailSender } from "./sender";

export class TrapSenderImpl implements IMailSender {
    private readonly transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST || "",
            port: Number(process.env.MAILTRAP_PORT) || 0,
            auth: {
                user: process.env.MAILTRAP_USER || "",
                pass: process.env.MAILTRAP_PASSWORD || "",
            },
        });
    }

    async send(message: MessageProps): Promise<void> {
        this.transporter.sendMail({
            to: message.to,
            from: message.from,
            subject: message.subject,
            html: message.body,
        });
    }

}
