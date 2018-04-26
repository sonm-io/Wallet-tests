module.exports = function () {
    this.When(/^Click the Send Ethereum button$/, function () {
        return page.accountDetailPage.clickSendEthereum();
    });

    this.When(/^Click the Send Sonm button$/, function () {
        return page.accountDetailPage.clickSendSnm();
    });

    this.Then(/^Account Detail page is displayed$/, async function () {
        return await page.accountDetailPage.waitForAccountDetailPageLoading();
    });

    this.When(/^Click the View Operation History$/, async function () {
        return await page.accountDetailPage.clickViewHistoryButton();
    });

    this.When(/^Click the Give me SONM tokens! button$/, async function () {
        return await page.accountDetailPage.clickOnRequestTokensButton();
    });

    this.Then(/^Alert "([^"]*)" is displayed$/, async function (alertMessage) {
        return await page.accountDetailPage.getAlertMessageText(alertMessage);
    });

    this.Then(/^Fill Account Password field for request tokens "([^"]*)"$/, async function (accPassword) {
        return await page.accountDetailPage.fillTokenRequestPasswordField(accPassword);
    });

    this.Then(/^Close Alert Message$/, async function () {
        return await page.accountDetailPage.closeAlertMessage();
    });

    this.When(/^Select Account "([^"]*)" from Accounts Dropdown$/, function (accName) {
        return page.accountDetailPage.selectAccountFromDropdown(accName);
    });
};
