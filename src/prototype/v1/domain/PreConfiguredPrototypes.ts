import { BankAccount, BankAccountBenefit } from "./BankAccount";

/**
 * Contas Checking possuem apenas um benefício básico, que é o cartão de débito.
 */
export const checkingAccountPrototype: BankAccount = new BankAccount(
    "CHECKING",
    "0001",
    0,
    new Set<BankAccountBenefit>(["DEBIT_CARD"]),
);

/**
 * Contas Saving possuem apenas um benefício básico, que é o saque mensal.
 */
export const savingAccountPrototype: BankAccount = new BankAccount(
    "SAVING",
    "0001",
    0,
    new Set<BankAccountBenefit>(["MONTHLY_WITHDRAWAL"]),
);

/**
 * Contas Premium possuem mais benefícios pré-cadastrados e nascem com um saldo bônus de R$500.
 */
export const premiumAccountPrototype: BankAccount = new BankAccount(
    "PREMIUM",
    "0001",
    500,
    new Set<BankAccountBenefit>(["CREDIT_CARD", "TRAVEL_INSURANCE"]),
);
