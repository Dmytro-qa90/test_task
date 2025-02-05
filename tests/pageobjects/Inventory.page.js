class InventoryPage {
    get addToCartButtons() { return $$('.btn_inventory'); }
    get cartButton() { return $('.shopping_cart_link'); }

    async addItemToCart(index = 0) { await this.addToCartButtons[index].click(); }
    async openCart() { await this.cartButton.click(); }
}

module.exports = new InventoryPage();
