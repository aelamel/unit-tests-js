const PaymentService = require('../services/PaymentService')
const RemotePaymentService = require('../services/RemotePaymentService')

jest.mock('../services/RemotePaymentService')

describe('PaymentService', () => {

    let remotePaymentService;
    let paymentService;
    beforeAll(() => {
        remotePaymentService = new RemotePaymentService();
        paymentService = new PaymentService(remotePaymentService);
    });

    it('should call the pay method with an amount of 100', () => {
        
        const fakeCart = {
            products: [
                {
                    title: "Learn Django & React.js",
                    price: 50
                },
                {
                    title: "Learn how to make an ecommerce website with woocommerce",
                    price: 50
                }
            ]
        };        

        const spy = jest.spyOn(remotePaymentService, "pay");

        paymentService.pay(fakeCart);

        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(100)

    });

    it("should return the payment history", () => {

        remotePaymentService.getHistory.mockReturnValueOnce([
            {label: "First payment"},
            {label: "Second payment"},
        ])
        const history = paymentService.getHistory();

        expect(history).toHaveLength(2)

    })



});