module.exports = function () {
    this.Then(/^Create New Account dialogue is displayed$/, async function () {
        return await page.dialogueNewAccount.waitNewAccountDialogue();
    });

    this.When(/^Fill in the Create New Account Password field "([^"]*)"/, async function (password) {
        return await page.dialogueNewAccount.fillNewAccountPassword(password);
    });

    this.When(/^Fill in the Create New Account Password Confirmation field "([^"]*)"/, async function (password) {
        return await page.dialogueNewAccount.fillNewAccountPasswordConfirmation(password);
    });

    this.When(/^Fill in the Create New Account Name field "([^"]*)"/, async function (name) {
        return await page.dialogueNewAccount.fillNewAccountAccountName(name);
    });

    this.When(/^Click the Create button$/, async function () {
        return await page.dialogueNewAccount.clickCreateNewAccountButton();
        //return await page.common.verifySpinnerIsNotVisible();
    });

    this.When(/^Fill in the Create New Account Private Key field "([^"]*)"$/, async function (privateKey) {
        return await page.dialogueNewAccount.fillNewAccountPrivateKeyField(privateKey);
    });

    this.Then(/^Create New Account Name field validation error message is displayed$/, async function () {
        return await page.pagesNotifications.validateNewAccountNameField();
    });

    this.Then(/^Create New Account Password field validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.pagesNotifications.validateNewAccountPasswordField(errorMessage);
    });

    this.Then(/^Create New Account Password Confirmation field validation error message is displayed$/, async function () {
        return await page.pagesNotifications.validateNewAccountConfirmationPasswordField();
    });

    this.Then(/^Private Key field validation error message "([^"]*)" is displayed$/, async function (errorMessage) {
        return await page.pagesNotifications.validateNewAccountPrivateKeyField(errorMessage);
    });

    this.Then(/^Clear Create New Account Password field$/, async function () {
        return await page.dialogueNewAccount.clearNewAccountPasswordField();
    });

    this.When(/^Close Create New Account dialogue$/, async function () {
        return await page.dialogueNewAccount.closeCreateNewAccountDialogue();
    });

    this.Then(/^All Create New Account fields are empty$/, async function () {
        await page.dialogueNewAccount.verifyCreateNewAccountNameFieldIsEmpty();
        await page.dialogueNewAccount.verifyCreateNewAccountPasswordFieldIsEmpty();
        await page.dialogueNewAccount.verifyCreateNewAccountConfirmationPasswordFieldIsEmpty();
        return await page.dialogueNewAccount.verifyCreateNewAccountPrivateKeyFieldIsEmpty();
    });
};