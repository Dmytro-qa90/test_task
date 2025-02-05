const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Checkout - Finish Button Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should complete the checkout process', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.clickContinue();

        expect(await checkoutPage.getErrorMessage()).toBe('Error: First Name is required');
    });
});



