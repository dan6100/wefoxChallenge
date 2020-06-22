let EC = protractor.ExpectedConditions;
class LoginPage {
    constructor() {
    }

    async goToLoginPage(url) {
        browser.get(url);
        await browser.wait(EC.titleIs('Anmeldung - wefox'), 10000);
    }

    async pageUrl() {
        return browser.getCurrentUrl();
    }

    async pageTitle() {
        return browser.getTitle();
    }

    async login(userName, password) {
        await element(by.css('[for="user_name"]')).click();
        await element(by.css('[t-selector="login-username-input"]')).sendKeys(userName);
        await element(by.css('[for="password"]')).click();
        await element(by.css('[t-selector="login-password-input"]')).sendKeys(password);
        await element(by.css('[t-selector="login-submit"]')).click();
    }
}

module.exports = new LoginPage();