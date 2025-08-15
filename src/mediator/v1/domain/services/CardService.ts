import { BankAccount } from "../BankAccount";

/**
 * Essa classe é responsável pela criação do cartão de débito para a conta bancária
 * através das APIs e serviços necessários.
 */
export class CreditCardService {
    private readonly cardNumberService: CardNumberService;

    constructor(cardNumberService: CardNumberService) {
        this.cardNumberService = cardNumberService;
    }

    async create(bankAccount: BankAccount): Promise<void> {
        const cardNumber: string = this.cardNumberService.generate("visa");

        console.log(`Creating credit card of number [${cardNumber}] for bankAccount [${bankAccount.number}]`);
    }
}

/**
 * Essa classe é responsável pela criação do cartão de débito para a conta bancária
 * através das APIs e serviços necessários.
 */
export class DebitCardService {
    private readonly cardNumberService: CardNumberService;

    constructor(cardNumberService: CardNumberService) {
        this.cardNumberService = cardNumberService;
    }

    async create(bankAccount: BankAccount): Promise<void> {
        const cardNumber: string = this.cardNumberService.generate("visa");

        console.log(`Creating debit card of number [${cardNumber}] for bankAccount [${bankAccount.number}]`);
    }
}

export class CardNumberService {
    generate(brand: "visa" | "mastercard" | "amex"): string {
        // BINs simplificados para exemplo
        const bins = {
            visa: ["4"],
            mastercard: ["51", "52", "53", "54", "55"],
            amex: ["34", "37"],
        };

        const bin: string = bins[brand][Math.floor(Math.random() * bins[brand].length)];

        // Definir comprimento (Visa/Mastercard = 16, Amex = 15)
        const length: number = brand === "amex" ? 15 : 16;

        // Começa com o BIN
        let number: string = bin;

        // Gera números aleatórios até o penúltimo dígito
        while (number.length < length - 1) {
            number += Math.floor(Math.random() * 10).toString();
        }

        // Calcula dígito de verificação usando Luhn
        const checkDigit: number = this.getLuhnCheckDigit(number);

        return number + checkDigit;
    }

    private getLuhnCheckDigit(numberWithoutCheck: string): number {
        const digits: number[] = numberWithoutCheck.split("").map(Number).reverse();

        const sum: number = digits.reduce((acc: number, digit: number, idx: number) => {
            if (idx % 2 === 0) {
                return acc + digit;
            }

            const doubled: number = digit * 2;

            return acc + (doubled > 9 ? doubled - 9 : doubled);
        }, 0);

        return (10 - (sum % 10)) % 10;
    }
}
