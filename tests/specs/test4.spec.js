const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');

describe('Checkout Button Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should navigate to checkout page', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();

        expect(await browser.getUrl()).toContain('checkout-step-one');
    });
});


