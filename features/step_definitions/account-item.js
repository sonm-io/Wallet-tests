module.exports = function () {
    this.Then(/^Click the Edit Account button next to "([^"]*)" Name$/, async function (accName) {
        return await page.accountsPageAccountItem.clickEditAccountNameButton(accName);
    });

    this.Then(/^Clear Account Name field$/, async function () {
        return await page.accountsPageAccountItem.clearAccountNameField();
    });

    this.When(/^Fill Account "([^"]*)" Name field with new "([^"]*)" Name$/, async function (accName, newAccountName) {
        return await page.accountsPageAccountItem.fillAccountNameField(accName, newAccountName);
    });

    this.Then(/^Account Name "([^"]*)" is present in Accounts list$/, async function (newAccountName) {
        return await page.accountsPageAccountItem.verifyAccountPresence(newAccountName);
    });

    this.When(/^Press ENTER button$/, async function () {
        return await page.accountsPageAccountItem.applyEditChanges();
    });

    this.When(/^Click the Delete Account button$/, async function () {
        return await page.dialogueDeleteAccount.clickDeleteButton();
    });

    this.Then(/^Delete Account dialogue is displayed$/, async function () {
        return await page.dialogueDeleteAccount.waitForDeleteAccountPopup();
    });

    this.Then(/^Account "([^"]*)" Name for Delete is correct$/, async function (accName) {
        return await page.dialogueDeleteAccount.verifyAccountNameForDelete(accName);
    });

    this.Then(/^Account "([^"]*)" is not present in Accounts list$/, async function (accName) {
        return await page.accountsPageAccountItem.verifyAccountIsDeleted(accName);
    });

    this.Then(/^Click the Delete Account button next to "([^"]*)" Name$/, async function (accName) {
        return await page.accountsPageAccountItem.clickDeleteAccountButton(accName);
    });

    this.When(/^Click the Cancel Delete Account button$/, async function () {
        return await page.dialogueDeleteAccount.clickCancelDeleteAccountButton();
    });

    this.Then(/^Account "([^"]*)" was not created$/, async function (accName) {
        return await page.accountsPageAccountItem.verifyAccountIsNotPresent(accName);
    });

    this.Then(/^Account's "([^"]*)" Ether value is "([^"]*)"$/, async function (accName, etherValue) {
        return await page.accountsPageAccountItem.getAccountEtherAmount(accName, etherValue);
    });

    this.Then(/^Account's "([^"]*)" Sonm value is "([^"]*)"$/, async function (accName, etherValue) {
        return await page.accountsPageAccountItem.getAccountSonmAmount(accName, etherValue);
    });

    this.When(/^Click the Show Private Key button next to "([^"]*)" Name$/, async function (accName) {
        return await page.accountsPageAccountItem.clickShowPrivateKeyButton(accName);
    });
    this.Then(/^Show Private Key dialogue is displayed$/, async function () {
        return await page.dialogueShowPrivateKey.waitForShowPrivateKeyPopup();
    });

    this.Then(/^Fill Show Private Key Password field "([^"]*)"$/, async function (password) {
        return await page.dialogueShowPrivateKey.fillPrivateKeyPasswordField(password);
    });

    this.When(/^Click the Show button$/, async function () {
        return await page.dialogueShowPrivateKey.showPrivateKey();
    });

    this.Then(/^Private Key "([^"]*)" is displayed$/, async function (privateKey) {
        await page.dialogueShowPrivateKey.waitForShowPrivateKeyPopup();
        return await page.dialogueShowPrivateKey.gerPrivateKeyFieldText(privateKey);
    });

    this.When(/^Close Show Private Key dialogue$/, async function () {
        return await page.dialogueShowPrivateKey.closePrivateKeyDialogue();
    });

    this.Then(/^Private Key Password validation error message is displayed$/, async function () {
        return await page.dialogueShowPrivateKey.validatePrivateKeyPasswordField();
    });

    this.When(/^Click the Account's address "([^"]*)"$/, async function (accountAddress) {
        return await page.accountsPageAccountItem.navigateToAccountDetailPage(accountAddress);
    });
};