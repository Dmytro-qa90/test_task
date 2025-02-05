const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Checkout - First Name Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should fill the "First Name" field', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.fillFirstName('John');

        expect(await checkoutPage.firstNameField.getValue()).toBe('John');
    });
});


