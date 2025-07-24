/**
 * Essa é a interface dos comandos que serão implementadas pelos comandos concretos.
 */
export interface INotificationCommand {
    execute(): Promise<void>;
}
