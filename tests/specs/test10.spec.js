const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Back Home Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should return to inventory page after checkout', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
        await checkoutPage.clickBackHome();

        expect(await browser.getUrl()).toContain('inventory');
    });
});
