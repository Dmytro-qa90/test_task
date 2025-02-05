class CheckoutPage {
    // Локатори для елементів форми
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get backHomeButton() { return $('#back-to-products'); }
    get confirmationMessage() { return $('.complete-header'); }
    get errorMessage() { return $('.error-message-container'); } // Додано локатор для помилки

    // Методи для заповнення полів
    async fillFirstName(firstName) {
        await this.firstNameField.waitForDisplayed();
        await this.firstNameField.setValue(firstName);
    }

    async fillLastName(lastName) {
        await this.lastNameField.waitForDisplayed();
        await this.lastNameField.setValue(lastName);
    }

    async fillPostalCode(postalCode) {
        await this.postalCodeField.waitForDisplayed();
        await this.postalCodeField.setValue(postalCode);
    }

    // Метод для заповнення всіх полів
    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillPostalCode(postalCode);
    }

    // Методи для кліків
    async clickContinue() {
        await this.continueButton.waitForClickable();
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.waitForClickable();
        await this.finishButton.click();
    }

    async clickBackHome() {
        await this.backHomeButton.waitForClickable();
        await this.backHomeButton.click();
    }

    // Отримати текст підтвердження замовлення
    async getConfirmationText() {
        await this.confirmationMessage.waitForDisplayed();
        return await this.confirmationMessage.getText();
    }

    // Отримати текст повідомлення про помилку
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed();
        return await this.errorMessage.getText();
    }
}

module.exports = new CheckoutPage();








