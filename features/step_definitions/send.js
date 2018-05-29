module.exports = function () {
    this.When(/^Account "([^"]*)" is selected From Accounts dropdown$/, async function (accName) {
        return await page.walletSendPage.selectAddressFromByName(accName);
    });

    this.When(/^Fill Send To Address field "([^"]*)"$/, async function (address) {
        return await page.walletSendPage.fillAddressTo(address);
    });

    this.When(/^Select currency "([^"]*)"$/, async function (currency) {
        return await page.walletSendPage.selectCurrency(currency);
    });

    this.When(/^Fill Amount field "([^"]*)"$/, async function (amount) {
        return await page.walletSendPage.fillAmountField(amount);
    });

    this.When(/^Click the Next button$/, async function () {
        return await page.walletSendPage.clickNext();
    });

    this.Then(/^Send page is displayed$/, async function () {
        return await page.walletSendPage.waitForSendPageLoading();
    });

    this.Then(/^Selected Currency "([^"]*)" is displayed$/, async function (currency) {
        return await page.walletSendPage.checkSelectedCurrency(currency);
    });

    this.Then(/^Transfer Confirmation page is displayed$/, async function () {
        return await page.transferConfirmationPage.waitForTransferConfirmationPageLoading();
    });

    this.Then(/^Account From Name is "([^"]*)" and Address is "([^"]*)" is displayed$/, async function (name, hex) {
        return await page.transferConfirmationPage.checkAccountFrom(name, hex);
    });

    this.Then(/^Account to is equal to "([^"]*)"$/, async function (address) {
        return await page.transferConfirmationPage.checkAccountTo(address);
    });

    this.Then(/^Amount is equal to "([^"]*)"$/, async function (amount) {
        return await page.transferConfirmationPage.checkAmount(amount);
    });

    this.Then(/^Gas limit is equal to "([^"]*)"$/, async function (gasLimit) {
        let gasL = shared.wdHelper.resolve(shared.config, gasLimit);
        return await page.transferConfirmationPage.checkGasLimit(gasL);
    });

    this.When(/^Fill Account Password field "([^"]*)"/, async function (password) {
        return await page.transferConfirmationPage.fillPassword(password);
    });

    this.When(/^Click the Send button$/, async function () {
        return await page.transferConfirmationPage.clickSendButton();
    });

    this.Then(/^Transaction Completed page is displayed$/, async function () {
        return await page.transferConfirmationPage.waitForPageLoading();
    });

    this.Then(/^Send To Address validation error message "([^"]*)" is displayed$/, async function (errMessage) {
        return await page.walletSendPage.validateSendToAddressField(errMessage);
    });

    this.Then(/^Send To Address validation message in not displayed$/, async function () {
        return await page.walletSendPage.verifyThatSendToAddressValidationMessageIsNotDisplayed();
    });

    this.When(/^Click the Add Maximum button$/, async function () {
       return await page.walletSendPage.clickAddMaximumButton();
    });

    this.Then(/^Amount field is equal to "([^"]*)"$/, async function (expectedValue) {
       return await page.walletSendPage.getAmountFieldValue(expectedValue);
    });

    this.Then(/^Amount validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.walletSendPage.validateAmountField(errorMessage);
    });

    this.When(/^Fill Gas Limit field "([^"]*)"$/, async function (gasLimitAmount) {
        return await page.walletSendPage.fillGasLimitField(gasLimitAmount);
    });

    this.Then(/^Gas Limit validation error message is displayed$/, async function () {
        return await page.walletSendPage.validateGasLimitField();
    });

    this.Then(/^Account Password validation error message is displayed$/, async function () {
        return await page.transferConfirmationPage.validateAccountPasswordField();
    });

    this.Then(/^Click the Back button$/, async function () {
        return await page.transferConfirmationPage.clickBackButton();
    });

    this.Then(/^Address Send To Address is "([^"]*)"$/, async function (address) {
        return await page.walletSendPage.getSendAddressToFieldValue(address);
    });
};