module.exports = function () {
    this.Then(/^Click the Edit Account button next to "([^"]*)" Name$/, async function (accName) {
        return await page.walletAccountsPageAccountItem.clickEditAccountNameButton(accName);
    });

    this.Then(/^Clear the Account Name field$/, async function () {
        return await page.walletAccountsPageAccountItem.clearAccountNameField();
    });

    this.When(/^Fill in the Account "([^"]*)" Name field with new "([^"]*)" Name$/, async function (accName, newAccountName) {
        return await page.walletAccountsPageAccountItem.fillAccountNameField(accName, newAccountName);
    });

    this.Then(/^Account Name "([^"]*)" is present in Accounts list$/, async function (newAccountName) {
        return await page.walletAccountsPageAccountItem.verifyAccountPresence(newAccountName);
    });

    this.When(/^Press the ENTER button$/, async function () {
        return await page.walletAccountsPageAccountItem.applyEditChanges();
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
        return await page.walletAccountsPageAccountItem.verifyAccountIsDeleted(accName);
    });

    this.Then(/^Click the Delete Account button next to "([^"]*)" Name$/, async function (accName) {
        return await page.walletAccountsPageAccountItem.clickDeleteAccountButton(accName);
    });

    this.When(/^Click the Cancel Delete Account button$/, async function () {
        return await page.dialogueDeleteAccount.clickCancelDeleteAccountButton();
    });

    this.Then(/^Account "([^"]*)" was not created$/, async function (accName) {
        return await page.walletAccountsPageAccountItem.verifyAccountIsNotPresent(accName);
    });

    this.Then(/^Account's "([^"]*)" Ether value is "([^"]*)"$/, async function (accName, etherValue) {
        return await page.walletAccountsPageAccountItem.getAccountEtherAmount(accName, etherValue);
    });

    this.Then(/^Account's "([^"]*)" Sonm value is "([^"]*)"$/, async function (accName, etherValue) {
        return await page.walletAccountsPageAccountItem.getAccountSonmAmount(accName, etherValue);
    });

    this.When(/^Click the Show Private Key button next to "([^"]*)" Name$/, async function (accName) {
        return await page.walletAccountsPageAccountItem.clickShowPrivateKeyButton(accName);
    });
    this.Then(/^Show Private Key dialogue is displayed$/, async function () {
        return await page.dialogueShowPrivateKey.waitForShowPrivateKeyPopup();
    });

    this.Then(/^Fill in the Show Private Key Password field "([^"]*)"$/, async function (password) {
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
        return await page.walletAccountsPageAccountItem.navigateToAccountDetailPage(accountAddress);
    });
};