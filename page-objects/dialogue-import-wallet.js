module.exports = {
    elements: {
        importWalletPopupHeader: by.xpath('//form/h3'),
        selectWalletImportField: by.xpath('//input[@type="file"]'),
        importWalletNameField: by.xpath('//input[@name="newName"]'),
        importWalletPasswordField: by.xpath('//input[@name="password"]'),
        importWalletButton: by.xpath("//button[.='Import']"),
        closeImportWalletDialogueButton: by.xpath('//div[@class="sonm-popup__inner"]/button')
    },

    //wait for page loading according to displayed import wallet header

    waitImportWalletDialogue: async function() {
        return await shared.wdHelper.waitForElementTextIs(this.elements.importWalletPopupHeader, shared.messages.dialogues.importWalletTitle);
    },

    //select wallet file for further import

    selectWalletFileForImport: function(walletName) {
        let targetFile = process.cwd() + '/shared-objects/' + walletName;
        return driver.wait(until.elementLocated(this.elements.selectWalletImportField)).sendKeys(targetFile);
    },

    //verify that import wallet file field is empty or not

    verifyImportWalletFileFieldIsEmpty: async function() {
        return await expect((await page.common.verifyFieldLength(this.elements.selectWalletImportField,)).length).to.equal(0);
    },

    //fill name field for wallet file

    fillImportWalletNameField: async function(walletName) {
        return (await shared.wdHelper.findVisibleElement(this.elements.importWalletNameField)).sendKeys(walletName);
    },

    //clear import wallet name field

    clearImportWalletNameField: function() {
        return page.common.clearInputField(this.elements.importWalletNameField);
    },

    //verify that import wallet name field is empty or not

    verifyImportWalletNameFieldIsEmpty: async function() {
        return await expect((await page.common.verifyFieldLength(this.elements.importWalletNameField)).length).to.equal(0);
    },

    //fill password field for wallet file

    fillImportWalletPasswordField: async function(password) {
        return (await shared.wdHelper.findVisibleElement(this.elements.importWalletPasswordField)).sendKeys(password);
    },

    //clear import wallet password field

    clearImportWalletPasswordField: function() {
        return page.common.clearInputField(this.elements.importWalletPasswordField);
    },

    //verify that import wallet password field is empty or not

    verifyImportWalletPasswordFieldIsEmpty: async function() {
        return await expect((await page.common.verifyFieldLength(this.elements.importWalletPasswordField)).length).to.equal(0);
    },

    //import wallet

    importWallet: async function() {
        return (await shared.wdHelper.findVisibleElement(this.elements.importWalletButton)).click();
    },

    //close import wallet dialogue

    closeImportWalletDialogue: async function() {
        return (await shared.wdHelper.findVisibleElement(this.elements.closeImportWalletDialogueButton)).click();
    }
};