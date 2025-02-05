const { loginToApp } = require('../pageobjects/helper');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');

describe('Add to Cart Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should add a product to the cart', async () => {
        await inventoryPage.addItemToCart(0);
        expect(await cartPage.getCartBadgeText()).toBe('1');
    });
});














