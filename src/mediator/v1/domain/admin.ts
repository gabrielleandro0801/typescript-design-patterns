import { ChatMediator } from "./chat-mediator";
import { User } from "./user";

export class Admin {
    private readonly _name: string;
    private readonly _mediator: ChatMediator;

    constructor(name: string, mediator: ChatMediator) {
        this._name = name;
        this._mediator = mediator;
    }

    get name(): string {
        return this._name;
    }

    sendToUser(user: User, message: string): void {
        this._mediator.sendToUser(user, message, this);
    }

    receive(message: string): void {
        console.log(`Admin ${this._name} received: [${message}]`);
    }
}
