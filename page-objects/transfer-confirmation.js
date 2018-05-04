module.exports = {
    elements: {
        header: by.xpath('//h1[.="Transfer confirmation"]'),
        addrFromName: by.className('sonm-send-confirm__account-name'),
        addrFromHex: by.className('sonm-send-confirm__account-addr'),
        addrTo: by.className('sonm-send-confirm__account-target'),
        amount: by.xpath('//dl[@class="sonm-send-confirm__values"]/dd[1]'),
        gasLimit: by.xpath('//dl[@class="sonm-send-confirm__values"]//dd[2]'),
        password: by.xpath('//input[@placeholder="Password"]'),
        passwordErrorMessage: by.css('.sonm-send-confirm__password-field .sonm-form-field__help'),
        sendBtn: by.xpath('//button[.="Send"]'),
        backBtn: by.xpath('//button[.="Back"]')
    },

    //wait for load account page according to displayed header

    waitForTransferConfirmationPageLoading: function () {
        return shared.wdHelper.findVisibleElement(this.elements.header);
    },

    //verify account form

    checkAccountFrom: async function (name, hex) {
        const addressNameText = await (await shared.wdHelper.findVisibleElement(this.elements.addrFromName,)).getText();
        const addHexText = await (await shared.wdHelper.findVisibleElement(this.elements.addrFromHex,)).getText();
        await expect(addressNameText).to.equal(name);
        return await expect(addHexText).to.equal(hex);
    },

    //verify send account to

    checkAccountTo: async function (address) {
        const addToText = await (await shared.wdHelper.findVisibleElement(this.elements.addrTo,)).getText();
        return await expect(addToText).to.equal(address);
    },

    //verify amount

    checkAmount: async function (amount) {
        const amountText = await (await shared.wdHelper.findVisibleElement(this.elements.amount)).getText();
        return await expect(amountText).to.equal(amount);
    },

    //verify gas limit amount

    checkGasLimit: async function (gasLimit) {
        const gasLimitText = await (await shared.wdHelper.findVisibleElement(this.elements.gasLimit)).getText();
        return await expect(gasLimitText).to.equal(gasLimit);
    },

    //fill account password field

    fillPassword: async function (password) {
        return (await shared.wdHelper.findVisibleElement(this.elements.password)).sendKeys(password);
    },

    //validate Password field

    validateAccountPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordErrorMessage,
            shared.messages.transfercomfirm.incorrectAccountPasswordFieldValidationMessage)
    },

    //click send button

    clickSendButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.sendBtn)).click();
    },

    //go to previous page

    clickBackButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.backBtn)).click();
    },
};