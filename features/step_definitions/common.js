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

    this.Given(/^Navigate to Profiles page$/, async function () {
        await page.common.openMarketMenu();
        return await page.common.navigateToProfilesTab();
    });

    this.Given(/^Navigate to Deposit page$/, async function () {
        await page.common.openMarketMenu();
        return await page.common.navigateToDepositTab();
    });

    //TODO refactor after adding attributes to send tab

    this.Then(/^The Next button is disabled$/, async function () {
        return await page.common.checkNextButtonIsDisabled();
    });

    this.Then(/^Notification contained text "([^"]*)" is displayed$/, async function (text) {
        return await page.common.verifyNotificationText(text);
    });

    this.Then(/^Close Notification$/, function () {
        return page.common.closeNotification();
    });

    this.When(/^Click the Next button$/, async function () {
        return await page.common.clickNextButton();
    });

    this.When(/^Clear the Amount field$/, async function () {
        return await page.common.clearAmountField();
    });
};