module.exports = function () {
    this.Then(/^Deposit page is displayed$/, async function () {
        return await page.marketDepositPage.waitForMarketDepositPageLoading();
    });

    this.Then(/^Deposit Account Name is "([^"]*)"$/, async function (accountName) {
        return await page.marketDealsPage.verifyAccountNameOnDepositPage(accountName);
    });

    this.When(/^Deposit Account Address is "([^"]*)"$/, async function (accountAddress) {
        return await page.marketDealsPage.verifyAccountAddressOnDepositPage(accountAddress);
    });

    this.When(/^Fill in the Deposit Amount field "([^"]*)"$/, async function (depositAmount) {
        return await page.marketDealsPage.fillAmountDepositField(depositAmount);
    });

    this.When(/^Click the Deposit Add Maximum button$/, async function () {
        return await page.marketDealsPage.clickAddMaximumDepositButton();
    });

    this.When(/^Fill in the Deposit Gas Limit field "([^"]*)"$/, async function (gasLimit) {
        return await page.marketDealsPage.fillGasDepositField(gasLimit);
    });

    this.When(/^Deposit is equal to "([^"]*)"$/, async function (depositValue) {
        return await page.marketDealsPage.verifyAmountDepositValue(depositValue);
    });

    this.When(/^Fill in the Deposit Gas Price field "([^"]*)"$/, async function (depositGasPrice) {
        return await page.marketDealsPage.fillGasPriceDepositField(depositGasPrice);
    });

    this.When(/^Deposit Gas Limit is equal to "([^"]*)"$/, async function (expectedDepositGasLimit) {
        return await page.marketDealsPage.verifyGasLimitDepositValue(expectedDepositGasLimit);
    });

    this.When(/^Deposit Gas Price is equal to "([^"]*)"$/, async function (expectedDepositGasPrice) {
        return await page.marketDealsPage.verifyGasPriceDepositValue(expectedDepositGasPrice);
    });

    this.When(/^Deposit SONM is equal to "([^"]*)"$/, async function (expectedSonmDepositValue) {
        return await page.marketDealsPage.verifySonmDepositValue(expectedSonmDepositValue);
    });

    this.When(/^Deposit SONM commission value is equal to "([^"]*)"$/, async function (expectedSonmCommissionValue) {
        return await page.marketDealsPage.verifySonmComissionValue(expectedSonmCommissionValue);
    });

    this.When(/^Click the Deposit button$/, async function () {
        return await page.marketDealsPage.clickDepositButton();
    });
};