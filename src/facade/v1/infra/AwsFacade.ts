import { Transaction } from "../domain/TransactionService";

/**
 * Esta classe atua como uma fachada (Facade), encapsulando a interação com
 * libs externas, como a SDK da AWS.
 */
export class AwsFacade {
    async saveTransaction(transaction: Transaction): Promise<void> {
        // simula interação com a SDK do DynamoDB realizando a inserção de um item
        console.log(`Salvando transação de id ${transaction.id} no DynamoDB`);
    }

    async generateReceipt(transaction: Transaction): Promise<void> {
        // simula interação com a SDK do S3 realizando o upload de um arquivo
        console.log(`Salvando recibo da transação de id ${transaction.id} no S3`);
    }

    async notifyTransaction(transaction: Transaction): Promise<void> {
        // simula interação com a SDK do SNS realizando a publicação de uma notificação
        console.log(`Publicando notificação da transação de id ${transaction.id} no SNS`);
    }
}
