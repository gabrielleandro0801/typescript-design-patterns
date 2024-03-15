import { Admin } from "./admin";
import { User } from "./user";

export class ChatMediator {
    private readonly _users: Array<User>;
    private _admin: Admin;

    constructor() {
        this._users = [];
    }

    addUser(user: User) {
        this._users.push(user);
    }

    set admin(admin: Admin) {
        this._admin = admin;
    }

    send(sender: User, message: string): void {
        const messageToSend: string = `Sender ${sender.name} says: ${message}`;

        for (const user of this._users) {
            if (user === sender) continue;

            user.receive(messageToSend);
        }

        if (this._admin) {
            this._admin.receive(messageToSend);
        }
    }

    sendToUser(user: User, message: string, sender: Admin): void {
        user.receive(`Admin ${sender.name} says: ${message}`);
    }
}
