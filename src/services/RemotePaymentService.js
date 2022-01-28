class RemotePaymentService {
  pay(amount) {
    console.log(`Payment method called with an amount of ${amount}`);
  }

  getHistory() {
    console.log("getHistory method called");
    return [];
  }
}

module.exports = RemotePaymentService;
