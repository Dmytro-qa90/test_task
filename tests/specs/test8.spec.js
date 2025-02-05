const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Checkout - Continue Button Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should proceed to step two of checkout', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await checkoutPage.clickContinue();

        expect(await browser.getUrl()).toContain('checkout-step-two');
    });
});

