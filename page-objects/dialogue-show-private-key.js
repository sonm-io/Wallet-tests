module.exports = {
    elements: {
        showPrivateKeyHeader: by.xpath('//form/h3'),
        privateKeyStartValue: by.css('.sonm-show-key__hash--visible .sonm-hash__start'),
        privateKeyEndValue: by.css('.sonm-show-key__hash--visible .sonm-hash__end'),
        closePrivateKeyDialogueButton: by.css('.sonm-popup__inner .sonm-popup__cross'),
        passwordField: by.xpath('//input[@type="password"]'),
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

    //TODO refactor

    getPrivateKeyFieldText: async function (expectedPrivateKey) {
        const actualPrivateKey = await (await shared.wdHelper.findVisibleElement(this.elements.privateKeyStartValue)).getText() +
            await (await shared.wdHelper.findVisibleElement(this.elements.privateKeyEndValue)).getText();
        return await expect(actualPrivateKey).to.equal(expectedPrivateKey);
    },

    //close private key dialogue

    closePrivateKeyDialogue: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.closePrivateKeyDialogueButton)).click();
    }
};