module.exports = {
    elements: {
        accountPasswordField: by.css('input[name="password"]'),
        amountValue: by.css('input[placeholder="Amount"]'),
        gasLimitValue: by.css('input[name="gasLimit"]'),
        gasPriceValue: by.css('input[name="gasPrice"]'),
        sonmValue: by.css('.sonm-deposit-withdraw__commission-grid-left dd'),
        sonmCommissionValue: by.css('.sonm-deposit-withdraw__commission-grid-right dd'),
        backBtn: by.css('.sonm-button--color-blue.sonm-button--transparent'),
        withdrawBtn: by.css('.sonm-button.sonm-button--color-violet')
    },

    //verify deposit amount value

    verifyAmountDepositValue: async function (expectedAmountValue) {
        return await shared.wdHelper.waitForElementTextIs(this.elements.amountValue, expectedAmountValue);
    },

    //verify gas limit deposit value

    verifyGasLimitDepositValue: async function (gasLimitValue) {
        return await shared.wdHelper.waitForElementTextIs(this.elements.gasLimitValue, gasLimitValue);
    },

    //verify gas price deposit value

    verifyGasPriceDepositValue: async function (gasPriceValue) {
        return await shared.wdHelper.waitForElementTextIs(this.elements.gasPriceField, gasPriceValue);
    },

    //verify SONM deposit value

    verifySonmDepositValue: async function (expectedSonmValue) {
        return await shared.wdHelper.verifyTextElement(this.elements.sonmValue, expectedSonmValue)
    },

    //verify SONM deposit commission value

    verifySonmComissionValue: async function (expectedSonmComValue) {
        return await shared.wdHelper.verifyTextElement(this.elements.sonmCommissionValue, expectedSonmComValue)
    },

    //go back to deposit page

    goBackToDepositPage: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.backBtn)).click();
    },

    //finish deposit

    clickDepositButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.withdrawBtn)).click();
    }
};