import { MessageProps } from "../message";
import { IMailSender } from "./sender";

export class MailSender {
    private _mailProvider: IMailSender;

    constructor(provider: IMailSender) {
        this._mailProvider = provider;
    }

    set mailProvider(provider: IMailSender) {
        this._mailProvider = provider;
    }

    async send(message: MessageProps) {
        await this._mailProvider.send(message);
    }
}
