import { Command } from "./command";
import { Receptor } from "./receptor";

export class CommandTwo implements Command {
    private readonly receptor: Receptor;

    constructor(receptor: Receptor) {
        this.receptor = receptor;
    }

    execute(): void {
        this.receptor.runCommand2();
    }

}
