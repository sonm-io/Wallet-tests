module.exports = function () {
    this.Then(/^Accounts page is displayed$/, async function () {
        return await page.walletAccountsPage.waitForAccountPageLoading();
    });

    this.When(/^Click the Import Account button$/, async function () {
        return await page.walletAccountsPage.importAccount();
    });

    this.When(/^Click the Create Account button$/, function () {
        return page.walletAccountsPage.createNewAccount();
    });

    this.Then(/^Account "([^"]*)" is present in Accounts list$/, function (name) {
        return page.walletAccountsPage.findAccountInList(name);
    });

    this.Then(/^Account "([^"]*)" is present in Accounts list with hash "([^"]*)"$/, async function (name, hash) {
        await page.walletAccountsPage.findAccountInList(name);
        return await page.walletAccountsPage.findAccountInListWithHash(hash);
    });

    this.When(/^Open Account "([^"]*)" details$/, function (name) {
        return page.walletAccountsPage.clickOnAccountInList(name);
    });

    this.When(/^Click the Logout button$/, async function () {
        return await page.walletAccountsPage.logoutFromWallet();
    });

    this.Then(/^Total Ether value is "([^"]*)"$/, async function (totalEtherValue) {
        return await page.walletAccountsPageAccountItem.getTotalEtherAmount(totalEtherValue);
    });

    this.Then(/^Total SONM value is "([^"]*)"$/, async function (totalSonmValue) {
        return await page.walletAccountsPageAccountItem.getTotalSonmAmount(totalSonmValue);
    });

    this.When(/^Click the ADD TOKEN button$/, async function () {
        return await page.walletAccountsPage.addToken();
    });

    this.When(/^Click the Add New Token button$/, async function () {
        return await page.dialogueAddToken.clickAddTokenButton();
    });

    this.Then(/^Add Token dialogue is displayed$/, async function () {
        return await page.dialogueAddToken.waitAddTokenDialogue();
    });

    this.Then(/^Fill in the Token Address field "([^"]*)"$/, async function (tokenName) {
        return await page.dialogueAddToken.fillTokenAddressField(tokenName);
    });

    this.Then(/^Token "([^"]*)" is present in Tokens list$/, async function (tokenName) {
        return await page.walletAccountsPage.findTokenInList(tokenName)
    });

    this.When(/^Click the Delete Token button next to Token "([^"]*)" Name$/, async function (tokenName) {
        return await page.walletAccountsPage.clickDeleteTokenButton(tokenName);
    });

    this.Then(/^Delete Token dialogue is displayed$/, async function () {
        return await page.dialogueDeleteToken.waitForDeleteTokenPopup();
    });

    this.Then(/^Token "([^"]*)" Name for Delete is correct$/, async function (tokenName) {
        return await page.dialogueDeleteToken.verifyTokenNameForDelete(tokenName);
    });

    this.When(/^Click the Delete button$/, async function () {
        return await page.dialogueDeleteToken.clickDeleteToken();
    });

    this.Then(/^Token "([^"]*)" is not present in Tokens list$/, async function (tokenName) {
        return await page.walletAccountsPage.verifyThatTokenIsDeletedFromList(tokenName);
    });

    this.Then(/^Add New Token error message is displayed$/, async function () {
        return await page.dialogueDeleteToken.validateAddNewTokenAddressField();
    });

    this.When(/^Add New Token button is disabled$/, async function () {
        return await page.dialogueAddToken.verifyThatAddTokenButtonIsDisabled();
    });
};