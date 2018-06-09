module.exports = {
    elements: {
        withdrawPageTitle: by.css('.sonm-app-common-block'),
        accountName: by.css('.sonm-account-item__name-text'),
        accountAddress: by.css('.sonm-account-item__address'),
        amountField: by.css('input[placeholder="Amount"]'),
        addMaximumBtn: by.css('.sonm-deposit-withdraw__values-amount-maximum'),
        gasLimitField: by.css('.sonm-deposit-withdraw-confirm__values-gas-limit .sonm-form-field__input'),
        gasPriceField: by.css('.sonm-deposit-withdraw__values-gas-price .sonm-form-field__input'),
        lowGasBtn: by.css('input[value="low"]'),
        normalGasBtn: by.css('input[value="normal"]'),
        highGasBtn: by.css('input[value="high"]')
    },

    //wait for load depost page according

    waitForMarketDepositPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.withdrawPageTitle, 'Deposit');
    },

    //verify account name on Deposit page

    verifyAccountNameOnDepositPage: async function (accountName) {
        return await shared.wdHelper.verifyTextElement(this.elements.accountName, accountName)
    },

    //verify account address on Deposit page

    verifyAccountAddressOnDepositPage: async function (accounAddress) {
        return await shared.wdHelper.verifyTextElement(this.elements.accountAddress, accounAddress)
    },

    //fill amount field

    fillAmountDepositField: async function (depositAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.amountField)).sendKeys(depositAmount);
    },

    //click the Add Maximum button

    clickAddMaximumDepositButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addMaximumBtn)).click();
    },

    //fill gas field

    fillGasDepositField: async function (gasLimitAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.gasLimitField)).sendKeys(gasLimitAmount);
    },

    //fill gas price field

    fillGasPriceDepositField: async function (gasPriceAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.gasPriceField)).sendKeys(gasPriceAmount);
    },

    //click the Low button

    clickLowGasPriceDepositButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.lowGasBtn)).click();
    },

    //click the Normal button

    clickNormalasPriceDepositButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.normalGasBtn)).click();
    },

    //click the High button

    clickMaxGasPriceDepositButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.highGasBtn)).click();
    }
};