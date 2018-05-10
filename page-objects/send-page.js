module.exports = {
    elements: {
        header: by.xpath('//h1[.="Send"]'),
        sendTo: by.xpath('//input[@placeholder="Address"]'),
        amount: by.xpath('//input[@placeholder="Amount"]'),
        amountField: by.css('.sonm-send__row-amount input'),
        amountAddMaximumBtn: by.xpath('//button[.="Add maximum"]'),
        gasLimit: by.css('.sonm-send__row-gas-limit .sonm-send__input'),
        gasPrice: by.css('.sonm-send__row-gas-price .sonm-form-field__input'),
        gasPriceLowBtn: by.xpath('//input[@type="radio"][@value="low"]'),
        gasPriceNormalBtn: by.xpath('//input[@type="radio"][@value="normal"]'),
        gasPriceHiBtn: by.xpath('//input[@type="radio"][@value="high"]'),
        NextBtn: by.xpath('//button[.="NEXT"]'),
        currencySelect: by.className('sonm-currency-big-select__option'),
        selectedCurrency: by.css('.ant-select-selection__rendered .sonm-currency-item__name'),
        sendTab: by.xpath('//li[.="Send"]'),
        select: by.css('.sonm-account-big-select'),
        selectedAccount: by.css('.sonm-big-select .sonm-account-item__name-text'),
        addressValidationNotificationMessage: by.css('.sonm-form-field--error .sonm-form-field__help'),
        amountValidationNotificationMessage: by.css('.sonm-send__row-amount .sonm-form-field__help'),
        gasLimitValidationNotificationMessage: by.css('.sonm-send__row-gas-limit .sonm-form-field__help')
    },

    //wait for loading account page according to displayed header

    waitForSendPageLoading: function () {
        return shared.wdHelper.findVisibleElement(this.elements.header);
    },

    //select address from dropdown

    selectAddressFromByName: async function (accName) {
        return await page.common.selectFromStandardDropdown(this.elements.select, by.xpath('//li[@title="' + accName + '"]'),
            this.elements.selectedAccount, accName);
    },

    //fill field send address to

    fillAddressTo: async function (address) {
        return (await shared.wdHelper.findVisibleElement(this.elements.sendTo)).sendKeys(address);
    },

    //get text from address field

    getSendAddressToFieldValue: async function (expectedAddress) {
        let sendToAddreessFieldText = await page.common.verifyFieldLength(this.elements.sendTo);
        return await expect(sendToAddreessFieldText).to.equal(expectedAddress);
    },

    //validate send to address field

    validateSendToAddressField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.addressValidationNotificationMessage,
            errorMessage);
    },

    //verify that Send To Address validation is not diplayed

    verifyThatSendToAddressValidationMessageIsNotDisplayed: async function () {
        return await shared.wdHelper.verifyElementAppearing(this.elements.addressValidationNotificationMessage);
    },

    //fill amount field

    fillAmountField: async function (amount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.amount)).sendKeys(amount);
    },

    //get text from amount field

    getAmountFieldValue: async function (expectedValue) {
        let amountFieldText = await page.common.verifyFieldLength(this.elements.amountField);
        return await expect(amountFieldText).to.equal(expectedValue);
    },

    //validate amount field

    validateAmountField: async function (errMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.amountValidationNotificationMessage,
            errMessage);
    },

    //click Add Maximum button

    clickAddMaximumButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.amountAddMaximumBtn)).click();
    },

    //fill Gas Limit field

    fillGasLimitField: async function (gasAmount) {
        return (await shared.wdHelper.findVisibleElement(this.elements.gasLimit)).sendKeys(gasAmount);
    },

    //validate gas limit field

    validateGasLimitField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.gasLimitValidationNotificationMessage,
            shared.messages.send.incorrectGasLimitValidationMessage);
    },

    // click next button

    clickNext: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.NextBtn)).click();
    },

    //verify selected currency

    checkSelectedCurrency: async function (currency) {
        const currencyElementText = await (await shared.wdHelper.findVisibleElement(this.elements.selectedCurrency)).getText();
        return await expect(currencyElementText).to.equal(currency);
    },

    //select currency from dropdown

    selectCurrency: async function (currency) {
        return await page.common.selectFromStandardDropdown(this.elements.currencySelect, by.css('li[title="' + currency + '"]'),
            by.css('.ant-select-selection__rendered .sonm-currency-item__name'), currency);
    },
};