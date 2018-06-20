module.exports = {
    elements: {
        newWalletPopuoHeader: by.css('.sonm-login__popup-content h3'),
        nwName: by.xpath('//input[@name="newName"]'),
        nwPass: by.xpath('//input[@name="newPassword"]'),
        nwPassConfirm: by.xpath('//input[@name="newPasswordConfirmation"]'),
        closeNewWalletDialogue: by.css('.sonm-popup__outer .sonm-popup__cross'),
        createNewWallet: by.css('.sonm-login__popup-content button'),
        networkField: by.css('div.sonm-login__network-type > div'),
        selectedNetwork: by.css('div.sonm-login__network-type div > div > div.sonm-select-selection-selected-value'),
        closeCreateNewWalletDialogueButton: by.css('.sonm-popup__inner .sonm-popup__cross')
    },

    //wait for page loading according to displayed new wallet header

    waitNewWalletDialogue: async function () {
        await shared.wdHelper.waitForElementTextIs(this.elements.newWalletPopuoHeader, shared.messages.dialogues.newWalletTitle);
        return await shared.wdHelper.findVisibleElement(this.elements.createNewWallet);
    },

    //close create wallet dialogue

    closeCreateNewWalletDialogue: async function () {
        return await (await shared.wdHelper.findVisibleElement(this.elements.closeNewWalletDialogue)).click();
    },

    //fill all fields in new wallet dialogue and create wallet

    fillNewWalletDialogue: async function (walletName, pass, confirm, chainname) {
        (await shared.wdHelper.findVisibleElement(this.elements.nwName)).sendKeys(walletName);
        (await shared.wdHelper.findVisibleElement(this.elements.nwPass)).sendKeys(pass);
        (await shared.wdHelper.findVisibleElement(this.elements.nwPassConfirm)).sendKeys(confirm);
        return await page.common.selectFromStandardDropdown(this.elements.networkField, by.xpath('//li[.="' + chainname + '"]'),
            this.elements.selectedNetwork, chainname);
    },

    //fill wallet name field

    fillWalletNameField: async function (walletName) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.nwName)).sendKeys(walletName);
    },

    //verify that import wallet file field is empty or not

    verifyCreateNewWalletNameFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.nwName)).length).to.equal(0);
    },

    //fill password wallet field

    fillWalletPasswordField: async function (password) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.nwPass)).sendKeys(password);
    },

    //verify that import wallet file field is empty or not

    verifyCreateNewWalletPasswordFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.nwPass)).length).to.equal(0);
    },

    //fill confirm password wallet field

    fillWalletConfirmPasswordField: async function (confirmPassword) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.nwPassConfirm)).sendKeys(confirmPassword);
    },

    //verify that import wallet file field is empty or not

    verifyCreateNewWalletConfirmationPasswordFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.nwPassConfirm)).length).to.equal(0);
    },

    //select network value from dropdown

    selectNetworkValue: function (chainname) {
        return page.common.selectFromStandardDropdown(this.elements.networkField, by.xpath('//li[.="' + chainname + '"]'),
            this.elements.selectedNetwork, chainname);
    },

    //clear wallet password field

    clearWalletConfirmPasswordField: function () {
        return page.common.clearInputField(this.elements.nwPassConfirm);
    },

    //click create wallet button for further creating wallet

    createNewWalletButton: async function () {
        return await (await shared.wdHelper.findVisibleElement(this.elements.createNewWallet)).click();
    },
};