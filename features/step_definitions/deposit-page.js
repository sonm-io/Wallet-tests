module.exports = function () {
    this.Then(/^Deposit page is displayed$/, async function () {
        return await page.marketDepositPage.waitForMarketDepositPageLoading();
    });

    this.Then(/^Deposit Account Name is "([^"]*)"$/, async function (accountName) {
        return await page.marketDepositPage.verifyAccountNameOnDepositPage(accountName);
    });

    this.When(/^Deposit Account Address is "([^"]*)"$/, async function (accountAddress) {
        return await page.marketDepositPage.verifyAccountAddressOnDepositPage(accountAddress);
    });

    this.When(/^Fill in the Deposit Amount field "([^"]*)"$/, async function (depositAmount) {
        return await page.marketDepositPage.fillAmountDepositField(depositAmount);
    });

    this.When(/^Click the Deposit Add Maximum button$/, async function () {
        return await page.marketDepositPage.clickAddMaximumDepositButton();
    });

    this.When(/^Fill in the Deposit Gas Limit field "([^"]*)"$/, async function (gasLimit) {
        return await page.marketDepositPage.fillGasDepositField(gasLimit);
    });

    this.When(/^Deposit is equal to "([^"]*)"$/, async function (depositValue) {
        return await page.marketDepositPage.verifyAmountDepositValue(depositValue);
    });

    this.When(/^Fill in the Deposit Gas Price field "([^"]*)"$/, async function (depositGasPrice) {
        return await page.marketDepositPage.fillGasPriceDepositField(depositGasPrice);
    });

    this.When(/^Deposit Gas Limit is equal to "([^"]*)"$/, async function (expectedDepositGasLimit) {
        return await page.marketDepositPage.verifyGasLimitDepositValue(expectedDepositGasLimit);
    });

    this.When(/^Deposit Gas Price is equal to "([^"]*)"$/, async function (expectedDepositGasPrice) {
        return await page.marketDepositPage.verifyGasPriceDepositValue(expectedDepositGasPrice);
    });

    this.When(/^Deposit SONM is equal to "([^"]*)"$/, async function (expectedSonmDepositValue) {
        return await page.marketDepositPage.verifySonmDepositValue(expectedSonmDepositValue);
    });

    this.When(/^Deposit SONM commission value is equal to "([^"]*)"$/, async function (expectedSonmCommissionValue) {
        return await page.marketDepositPage.verifySonmComissionValue(expectedSonmCommissionValue);
    });

    this.When(/^Click the Deposit button$/, async function () {
        return await page.marketDepositPage.clickDepositButton();
    });

    this.Then(/^Deposit Amount validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.pagesNotifications.validateDepositWithdrawAmountField(errorMessage);
    });

    this.Then(/^Deposit Gas Limit validation error message is displayed$/, async function (errorMessage) {
        return await page.pageNotifications.validateDepositWithdrawGasLimitField(errorMessage);
    });
};