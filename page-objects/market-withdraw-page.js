module.exports = {
    elements: {
        withdrawPageTitle: by.css('.sonm-app-common-block'),
        accountName: by.css('.sonm-account-item__name-text'),
        accountAddress: by.css('.sonm-account-item__address'),
        amountField: by.css('input[placeholder="Amount"]'),
        addMaximumBtn: by.css('.sonm-withdraw-withdraw__values-amount-maximum'),
        gasLimitField: by.css('.sonm-withdraw-withdraw-confirm__values-gas-limit .sonm-form-field__input'),
        gasPriceField: by.css('.sonm-withdraw-withdraw__values-gas-price .sonm-form-field__input'),
        lowGasBtn: by.css('input[value="low"]'),
        normalGasBtn: by.css('input[value="normal"]'),
        highGasBtn: by.css('input[value="high"]'),
        nextBtn: by.css('.sonm-button.sonm-button--color-violet')
    },

    //wait for load depost page according

    waitForMarketWithdrawPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.withdrawPageTitle, 'Withdraw');
    },

    //verify account name on Withdraw page

    verifyAccountNameOnWithdrawPage: async function (accountName) {
        return await shared.wdHelper.verifyTextElement(this.elements.accountName, accountName)
    },

    //verify account address on Withdraw page

    verifyAccountAddressOnWithdrawPage: async function (accountName) {
        return await shared.wdHelper.verifyTextElement(this.elements.accountAddress, accountName)
    },

    //fill amount field

    fillAmountWithdrawField: async function (withdrawAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.amountField)).sendKeys(withdrawAmount);
    },

    //click the Add Maximum button

    clickAddMaximumWithdrawButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addMaximumBtn)).click();
    },

    //fill gas field

    fillGasWithdrawField: async function (gasLimitAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.gasLimitField)).sendKeys(gasLimitAmount);
    },

    //fill gas price field

    fillGasPriceWithdrawField: async function (gasPriceAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.gasPriceField)).sendKeys(gasPriceAmount);
    },

    //click the Low button

    clickLowGasPriceWithdrawButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.lowGasBtn)).click();
    },

    //click the Normal button

    clickNormalasPriceWithdrawButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.normalGasBtn)).click();
    },

    //click the High button

    clickMaxGasPriceWithdrawButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.highGasBtn)).click();
    },

    //navigate to withdraw confirmation page for further withdraw operation complete

    navigateToWithdrawConfirmationPage: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.nextBtn)).click();
    }
};