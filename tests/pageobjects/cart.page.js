class CartPage {
    get cartButton() { return $('#shopping_cart_container .shopping_cart_link'); }
    get checkoutButton() { return $('.checkout_button'); }
    get cartBadge() { return $('.shopping_cart_badge'); }

    async openCart() { await this.cartButton.click(); }
    async clickCheckout() { await this.checkoutButton.click(); }
    async getCartBadgeText() { return await this.cartBadge.getText(); }
}

module.exports = new CartPage();





