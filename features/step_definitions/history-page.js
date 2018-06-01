module.exports = function () {

    this.Then(/^History page is displayed$/, async function () {
        return await page.walletAccountHistoryPage.waitForHistoryPageLoading();
    });

    this.Then(/^Account address is "([^"]*)"$/, async function (accountAddress) {
        return await page.walletAccountHistoryPage.verifySelectedAccountAddress(accountAddress);
    });

    this.Then(/^Date is Today's$/, async function () {
        return await page.walletAccountHistoryPage.verifyTransactionDate();
    });

    this.Then(/^Account From name is "([^"]*)"$/, async function (accFromName) {
        return await page.walletAccountHistoryPage.verifyFromAddressName(accFromName);
    });
    this.Then(/^Account From address is "([^"]*)"$/, async function (accFromAddress) {
        return await page.walletAccountHistoryPage.verifyFromAddress(accFromAddress);
    });

    this.Then(/^History page is displayed with Account Name "([^"]*)" in Header$/, async function (accName) {
        return await page.walletAccountHistoryPage.verifyThatAccountHistoryIsSelected(accName);
    });

    this.Then(/^Account To address is "([^"]*)"$/, async function (accToAddress) {
        return await page.walletAccountHistoryPage.verifyToAddress(accToAddress);
    });

    this.Then(/^Amount is "([^"]*)"$/, async function (sentAmount) {
        return await page.walletAccountHistoryPage.verifySentAmount(sentAmount);
    });

    this.Then(/^Amount fee is "([^"]*)"$/, async function (sentFee) {
        return await page.walletAccountHistoryPage.verifySentFee(sentFee);
    });

    this.Then(/^Status is "([^"]*)"$/, async function (status) {
        return await page.walletAccountHistoryPage.verifyTransStatus(status);
    });
};