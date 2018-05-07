module.exports = function () {
    this.When(/^Account "([^"]*)" is selected From Accounts dropdown$/, async function (accName) {
        return await page.sendPage.selectAddressFromByName(accName);
    });

    this.When(/^Fill Send To Address field "([^"]*)"$/, async function (address) {
        return await page.sendPage.fillAddressTo(address);
    });

    this.When(/^Select currency "([^"]*)"$/, async function (currency) {
        return await page.sendPage.selectCurrency(currency);
    });

    this.When(/^Fill Amount field "([^"]*)"$/, async function (amount) {
        return await page.sendPage.fillAmountField(amount);
    });

    this.When(/^Click the Next button$/, async function () {
        return await page.sendPage.clickNext();
    });

    this.Then(/^Send page is displayed$/, async function () {
        return await page.sendPage.waitForSendPageLoading();
    });

    this.Then(/^Selected Currency "([^"]*)" is displayed$/, async function (currency) {
        return await page.sendPage.checkSelectedCurrency(currency);
    });

    this.Then(/^Transfer Confirmation page is displayed$/, async function () {
        return await page.transferConfirmation.waitForTransferConfirmationPageLoading();
    });

    this.Then(/^Account From Name is "([^"]*)" and Address is "([^"]*)" is displayed$/, async function (name, hex) {
        return await page.transferConfirmation.checkAccountFrom(name, hex);
    });

    this.Then(/^Account to is equal to "([^"]*)"$/, async function (address) {
        return await page.transferConfirmation.checkAccountTo(address);
    });

    this.Then(/^Amount is equal to "([^"]*)"$/, async function (amount) {
        return await page.transferConfirmation.checkAmount(amount);
    });

    this.Then(/^Gas limit is equal to "([^"]*)"$/, async function (gasLimit) {
        let gasL = shared.wdHelper.resolve(shared.config, gasLimit);
        return await page.transferConfirmation.checkGasLimit(gasL);
    });

    this.When(/^Fill Account Password field "([^"]*)"/, async function (password) {
        return await page.transferConfirmation.fillPassword(password);
    });

    this.When(/^Click the Send button$/, async function () {
        return await page.transferConfirmation.clickSendButton();
    });

    this.Then(/^Transaction Completed page is displayed$/, async function () {
        return await page.transactionSent.waitForPageLoading();
    });

    this.Then(/^Send To Address validation error message "([^"]*)" is displayed$/, async function (errMessage) {
        return await page.sendPage.validateSendToAddressField(errMessage);
    });

    this.Then(/^Send To Address validation message in not displayed$/, async function () {
        return await page.sendPage.verifyThatSendToAddressValidationMessageIsNotDisplayed();
    });

    this.When(/^Click the Add Maximum button$/, async function () {
       return await page.sendPage.clickAddMaximumButton();
    });

    this.Then(/^Amount field is equal to "([^"]*)"$/, async function (expectedValue) {
       return await page.sendPage.getAmountFieldValue(expectedValue);
    });

    this.Then(/^Amount validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.sendPage.validateAmountField(errorMessage);
    });

    this.When(/^Fill Gas Limit field "([^"]*)"$/, async function (gasLimitAmount) {
        return await page.sendPage.fillGasLimitField(gasLimitAmount);
    });

    this.Then(/^Gas Limit validation error message is displayed$/, async function () {
        return await page.sendPage.validateGasLimitField();
    });

    this.Then(/^Account Password validation error message is displayed$/, async function () {
        return await page.transferConfirmation.validateAccountPasswordField();
    });

    this.Then(/^Click the Back button$/, async function () {
        return await page.transferConfirmation.clickBackButton();
    });

    this.Then(/^Address Send To Address is "([^"]*)"$/, async function (address) {
        return await page.sendPage.getSendAddressToFieldValue(address);
    });
};