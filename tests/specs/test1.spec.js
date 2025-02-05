const { loginToApp } = require('../pageobjects/helper');

describe('Login Test', () => {
    before(async () => {
        await loginToApp();
    });

    it('should log in successfully', async () => {
        expect(await browser.getUrl()).toContain('inventory');
    });
});







