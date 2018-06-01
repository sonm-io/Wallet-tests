module.exports = {
    elements: {
        showPrivateKeyHeader: by.xpath('//form/h3'),
        privateKeyValue: by.css('.sonm-show-key__hash--visible'),
        closePrivateKeyDialogueButton: by.css('.sonm-popup__inner .sonm-popup__cross'),
        passwordField: by.xpath('//input[@type="password"]'),
        passwordValidationMessage: by.css('.sonm-form-field--error .sonm-form-field__help'),
        showButton: by.css('.sonm-show-key__form button')
    },

    //wait for load show private key dialogue

    waitForShowPrivateKeyPopup: async function () {
        await shared.wdHelper.waitForElementTextIs(this.elements.showPrivateKeyHeader, shared.messages.dialogues.showPrivateKeyTitle);
        return await shared.wdHelper.findVisibleElement(this.elements.showButton);
    },

    //fill password field

    fillPrivateKeyPasswordField: async function (password) {
        return (await shared.wdHelper.findVisibleElement(this.elements.passwordField)).sendKeys(password);
    },

    //click show private key button for further key displaying

    showPrivateKey: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.showButton)).click();
    },

    //assert private key field

    gerPrivateKeyFieldText: async function (expectedPrivateKey) {
        const privateKeyText = await (await shared.wdHelper.findVisibleElement(this.elements.privateKeyValue)).getText();
        return await expect(privateKeyText).to.equal(expectedPrivateKey);
    },

    //validate private key password field

    validatePrivateKeyPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordValidationMessage,
            shared.messages.privateKey.privateKeyIncorrectPasswordValidationMessage);
    },

    //close private key dialogue

    closePrivateKeyDialogue: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.closePrivateKeyDialogueButton)).click();
    }
};