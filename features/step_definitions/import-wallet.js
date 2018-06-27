module.exports = function () {
    this.When(/^Wallet file for import "([^"]*)" is selected$/, function (walletName) {
        return page.dialogueImportWallet.selectWalletFileForImport(walletName);
    });

    this.When(/^Fill in the Import Wallet Name field "([^"]*)"$/, async function (importWalletName) {
        return await page.dialogueImportWallet.fillImportWalletNameField(importWalletName);
    });

    this.When(/^Fill in the Import Wallet Password field "([^"]*)"$/, async function (importWalletPassword) {
        return await page.dialogueImportWallet.fillImportWalletPasswordField(importWalletPassword);
    });

    this.When(/^Click the Import button$/, async function () {
        return await page.dialogueImportWallet.importWallet();
    });

    this.Then(/^Import Wallet File field validation error message is displayed$/, async function () {
        return await page.pagesNotifications.validateImportWalletFileField(
            shared.messages.importWallet.importWalletIncorrectFileValidationMessage);
    });

    this.Then(/^Import Wallet Name field validation error message is displayed$/, async function () {
        return await page.pagesNotifications.validateImportWalletNameField(
            shared.messages.importWallet.importWalletSameNameValidationMessage);
    });

    this.Then(/^Import Wallet Password field validation error message is displayed$/, async function () {
        return await page.pagesNotifications.validateImportWalletPasswordField(
            shared.messages.importWallet.importWalletIncorrectPasswordValidationMessage);
    });

    this.Then(/^Clear the Import Wallet Name field$/, function () {
        return page.dialogueImportWallet.clearImportWalletNameField();
    });

    this.Then(/^Clear the Import Wallet Password field$/, function () {
        return page.dialogueImportWallet.clearImportWalletPasswordField();
    });

    this.Then(/^Import Wallet dialogue is displayed$/, async function () {
        return await page.dialogueImportWallet.waitImportWalletDialogue();
    });

    this.When(/^Close the Import Wallet dialogue$/, async function () {
        return await page.dialogueImportWallet.closeImportWalletDialogue();
    });

    this.Then(/^All the Import Wallet fields are empty$/, async function () {
        await page.dialogueImportWallet.verifyImportWalletFileFieldIsEmpty();
        await page.dialogueImportWallet.verifyImportWalletNameFieldIsEmpty();
        return await page.dialogueImportWallet.verifyImportWalletPasswordFieldIsEmpty();
    });
};