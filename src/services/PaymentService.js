class PaymentService {
  constructor(remotePaymentService) {
    this.remotePaymentService = remotePaymentService;
  }

  pay(cart) {
    const { products = [] } = cart;
    const amount = products.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    this.remotePaymentService.pay(amount);
  }

  getHistory() {
    return this.remotePaymentService.getHistory();
  }
}

module.exports = PaymentService;
