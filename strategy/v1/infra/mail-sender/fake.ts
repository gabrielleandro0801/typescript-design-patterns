import { MessageProps } from "../message";
import { IMailSender } from "./sender";

export class FakeMailSenderImpl implements IMailSender {

    async send(message: MessageProps): Promise<void> {
        console.log(message);
    }

}
