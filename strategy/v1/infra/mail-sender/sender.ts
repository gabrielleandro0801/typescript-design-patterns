import { MessageProps } from "../message";

export interface IMailSender {
    send(message: MessageProps): Promise<void>;
};
