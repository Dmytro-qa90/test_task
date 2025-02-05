const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');

describe('Open Cart Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should navigate to cart page', async () => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();

        expect(await browser.getUrl()).toContain('cart');
    });
});


