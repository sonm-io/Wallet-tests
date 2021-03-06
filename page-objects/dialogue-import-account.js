module.exports = {
    elements: {
        importAccountPopupHeader: by.xpath('//form/h3'),
        closeImportAccountDialogueButton: by.xpath('//div[@class="sonm-popup__inner"]/button'),
        fileField: by.xpath('//input[@type="file"]'),
        accountNameField: by.xpath('//input[@name="name"]'),
        accountPasswordField: by.xpath('//input[@name="password"]'),
        addButton: by.xpath('//button[.="Add"]'),
        preview: by.className('sonm-accounts-add-account__preview-ct')
    },

    //wait for page loading according to displayed add account header

    waitImportAccountDialogue: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.importAccountPopupHeader, shared.messages.dialogues.importAccountTitle);
    },

    //upload account file

    uploadAccountFile: function (filename = 'for_upload.json') {
        let targetFile = process.cwd() + '/shared-objects/' + filename;
        return driver.wait(until.elementLocated(this.elements.fileField)).sendKeys(targetFile);
    },

    //import account preview

    findPreview: async function () {
        return await shared.wdHelper.findVisibleElement(this.elements.preview);
    },

    //enter account name

    fillImportAccountName: async function (name) {
        return (await shared.wdHelper.findVisibleElement(this.elements.accountNameField)).sendKeys(name);
    },

    //enter account password

    fillImportAccountPassword: async function (password) {
        return (await shared.wdHelper.findVisibleElement(this.elements.accountPasswordField)).sendKeys(password);
    },

    clearImportAccountPasswordField: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.accountPasswordField)).clear();
    },

    //click add account button

    clickAddImportAccountButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addButton)).click();
    },

    //close import account dialogue

    closeImportAccountDialogue: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.closeImportAccountDialogueButton)).click();
    },

    //verify that import account file field is empty

    verifyImportAccountFileFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.fileField)).length).to.equal(0);
    },

    //verify that import account name field is empty

    verifyImportAccountNameFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.accountNameField)).length).to.equal(0);
    },

    //verify that import account password field is empty

    verifyImportAccountPasswordFieldIsEmpty: async function () {
        return await expect((await page.common.verifyFieldLength(this.elements.accountPasswordField)).length).to.equal(0);
    }
};