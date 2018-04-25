module.exports = function() {

    this.Then(/^History page is displayed with Account Name "([^"]*)" in Header$/, async function (accountName) {
        return await page.accountHistoryPage.waitForHistoryPageLoading(accountName);
    });

    this.Then(/^Account address is "([^"]*)"$/, async function (accountAddress) {
        return await page.accountHistoryPage.verifyAccountAddress(accountAddress);
    });
};