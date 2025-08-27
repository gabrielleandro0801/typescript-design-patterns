import { PaymentService } from "./domain/PaymentService";

async function main() {
    const paymentService: PaymentService = new PaymentService();

    await paymentService.pay(1, "PIX", "PAYPAL");
    await paymentService.pay(2, "PIX", "STRIPE");
    await paymentService.pay(3, "CREDIT_CARD", "PAYPAL");
    await paymentService.pay(4, "CREDIT_CARD", "STRIPE");
    await paymentService.pay(5, "BOLETO", "PAYPAL");
    await paymentService.pay(6, "BOLETO", "STRIPE");
}

(async () => {
    await main();
})();
