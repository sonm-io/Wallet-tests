module.exports = {
    elements: {
        newAccountPopupHeader: by.css('.sonm-accounts-create-account__form h3'),
        newAccountNameField: by.xpath('//input[@name="name"]'),
        newAccountPasswordField: by.xpath('//input[@name="password"]'),
        newAccountPasswordConfirmationField: by.xpath('//input[@name="confirmation"]'),
        newAccountPrivateKeyField: by.xpath('//input[@name="privateKey"]'),
        createNewAccountButton: by.css('.sonm-accounts-create-account__form button'),
        closeCreateNewAccountDialogueButton: by.xpath('//div[@class="sonm-popup__inner"]/button')
    },

    //wait for page loading according to displayed new account header

    waitNewAccountDialogue: async function () {
        await shared.wdHelper.waitForElementTextIs(this.elements.newAccountPopupHeader, shared.messages.dialogues.newAccountTitle);
        return await shared.wdHelper.findVisibleElement(this.elements.createNewAccountButton);
    },

    //fill account name field

    fillNewAccountAccountName: async function (name) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.newAccountNameField)).sendKeys(name);
    },

    //validate account name field

    verifyCreateNewAccountNameFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.newAccountNameField)).length).to.equal(0);
    },

    //validate account password field

    fillNewAccountPassword: async function (password) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.newAccountPasswordField)).sendKeys(password);
    },

    //verify that create new account password empty or not

    verifyCreateNewAccountPasswordFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.newAccountPasswordField)).length).to.equal(0);
    },

    //fill account password confirmation field

    fillNewAccountPasswordConfirmation: async function (password) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.newAccountPasswordConfirmationField)).sendKeys(password);
    },

    //verify that create account confirmation password empty or not

    verifyCreateNewAccountConfirmationPasswordFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.newAccountPasswordConfirmationField)).length).to.equal(0);
    },

    //clear account password field

    clearNewAccountPasswordField: async function () {
        return page.common.clearInputField(this.elements.newAccountPasswordField);
    },

    //fill private key field

    fillNewAccountPrivateKeyField: async function (privateKey) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.newAccountPrivateKeyField)).sendKeys(privateKey);
    },

    //verify that create account private key field empty or not

    verifyCreateNewAccountPrivateKeyFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.newAccountPrivateKeyField)).length).to.equal(0);
    },

    //click create new account button

    clickCreateNewAccountButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.createNewAccountButton)).click();
    },

    //close create new account dialogue

    closeCreateNewAccountDialogue: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.closeCreateNewAccountDialogueButton)).click();
    }
};