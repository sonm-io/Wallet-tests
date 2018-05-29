module.exports = function () {
    this.When(/^Click the Send Ethereum button$/, function () {
        return page.walletAccountDetailPage.clickSendEthereum();
    });

    this.When(/^Click the Send Sonm button$/, function () {
        return page.walletAccountDetailPage.clickSendSnm();
    });

    this.Then(/^Account Detail page is displayed$/, async function () {
        return await page.walletAccountDetailPage.waitForAccountDetailPageLoading();
    });

    this.When(/^Click the View Operation History$/, async function () {
        return await page.walletAccountDetailPage.clickViewHistoryButton();
    });

    this.When(/^Click the Give me SONM tokens! button$/, async function () {
        return await page.walletAccountDetailPage.clickOnRequestTokensButton();
    });

    this.Then(/^Alert "([^"]*)" is displayed$/, async function (alertMessage) {
        return await page.walletAccountDetailPage.getAlertMessageText(alertMessage);
    });

    this.Then(/^Fill Account Password field for request tokens "([^"]*)"$/, async function (accPassword) {
        return await page.walletAccountDetailPage.fillTokenRequestPasswordField(accPassword);
    });

    this.Then(/^Close Alert Message$/, async function () {
        return await page.walletAccountDetailPage.closeAlertMessage();
    });

    this.When(/^Select Account "([^"]*)" from Accounts Dropdown$/, function (accName) {
        return page.walletAccountDetailPage.selectAccountFromDropdown(accName);
    });
};
