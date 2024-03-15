import { ChatMediator } from "./chat-mediator";

export class User {
    private readonly _name: string;
    private readonly _mediator: ChatMediator;

    constructor(name: string, mediator: ChatMediator) {
        this._name = name;
        this._mediator = mediator;
    }

    get name(): string {
        return this._name;
    }

    send(message: string): void {
        this._mediator.send(this, message);
    }

    receive(message: string): void {
        console.log(`User ${this._name} received: ${message}`);
    }
}
