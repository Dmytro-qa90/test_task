const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Checkout - Postal Code Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should fill the "Postal Code" field', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.fillPostalCode('12345');

        expect(await checkoutPage.postalCodeField.getValue()).toBe('12345');
    });
});


