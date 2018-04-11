module.exports = function () {
    this.When(/^Keystore file "([^"]*)" is selected for upload$/, async function (filename) {
        return await page.dialogueImportAccount.uploadAccountFile(filename);
    });

    this.Then(/^Account Preview is displayed$/, async function () {
        return await page.dialogueImportAccount.findPreview();
    });

    this.When(/^Fill Import Account Password field "([^"]*)"$/, async function (password) {
        return await page.dialogueImportAccount.fillImportAccountPassword(password);
    });

    this.When(/^Fill Import Account Name field "([^"]*)"$/, async function (name) {
        return await page.dialogueImportAccount.fillImportAccountName(name);
    });

    this.When(/^Click the Add button$/, async function () {
        await page.dialogueImportAccount.clickAddImportAccountButton();
        return await page.dialogueImportAccount.verifySpinnerIsNotVisible();
    });

    this.Then(/^Add Account dialogue is displayed$/, async function () {
        return await page.dialogueImportAccount.waitImportAccountDialogue();
    });

    this.Then(/^Import Account File field validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.dialogueImportAccount.validateImportAccountFileField(errorMessage);
    });

    this.Then(/^Import Account Name field validation error message is displayed$/, async function () {
        return await page.dialogueImportAccount.validateImportAccountNameField();
    });

    this.Then(/^Import Account Password validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.dialogueImportAccount.validateImportAccountPasswordField(errorMessage);
    });

    this.Then(/^Clear Import Account Password Field$/, async function () {
        return await page.dialogueImportAccount.clearImportAccountPasswordField();
    });

    this.When(/^Close Import Account dialogue$/, async function () {
        return await page.dialogueImportAccount.closeImportAccountDialogue();
    });

    this.Then(/^All Import Account Dialogue fields are empty$/, async function () {
        await page.dialogueImportAccount.verifyImportAccountFileFieldIsEmpty();
        await page.dialogueImportAccount.verifyImportAccountNameFieldIsEmpty();
        return await page.dialogueImportAccount.verifyImportAccountPasswordFieldIsEmpty();
    });
};