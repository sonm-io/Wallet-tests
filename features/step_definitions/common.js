module.exports = function () {
    this.Then(/^Navigate to Accounts page$/, async function () {
        await page.common.openWalletMenu();
        return await page.common.navigateToAccountTab();
    });

    this.When(/^Navigate to History page$/, async function () {
        await page.common.openWalletMenu();
        return await page.common.navigateToHistoryTab();
    });

    this.Given(/^Navigate to Send page$/, async function () {
        await page.common.openWalletMenu();
        return await page.common.navigateToSendTab();
    });

    //TODO refactor after adding attributes to send tab

    this.Then(/^Send link tab is disabled$/, async function () {
        return await page.accountsPage.checkSendTabIsDisabled();
    });

    this.Then(/^Notification contained text "([^"]*)" is displayed$/, async function (text) {
        return await page.common.verifyNotificationText(text);
    });

    this.Then(/^Close Notification$/, function () {
        return page.common.closeNotification();
    });

    this.Given(/^Navigate to Profiles page$/, async function () {
        await page.common.openMarketMenu();
        return await page.common.navigateToProfilesTab();
    });
};