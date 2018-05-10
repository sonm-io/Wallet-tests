module.exports = function () {

    this.Then(/^History page is displayed$/, async function () {
        return await page.accountHistoryPage.waitForHistoryPageLoading();
    });

    this.Then(/^Account address is "([^"]*)"$/, async function (accountAddress) {
        return await page.accountHistoryPage.verifySelectedAccountAddress(accountAddress);
    });

    this.Then(/^Date is Today's$/, async function () {
        return await page.accountHistoryPage.verifyTransactionDate();
    });

    this.Then(/^Account From name is "([^"]*)"$/, async function (accFromName) {
        return await page.accountHistoryPage.verifyFromAddressName(accFromName);
    });
    this.Then(/^Account From address is "([^"]*)"$/, async function (accFromAddress) {
        return await page.accountHistoryPage.verifyFromAddress(accFromAddress);
    });

    this.Then(/^History page is displayed with Account Name "([^"]*)" in Header$/, async function (accName) {
        return await page.accountHistoryPage.verifyThatAccountHistoryIsSelected(accName);
    });

    this.Then(/^Account To address is "([^"]*)"$/, async function (accToAddress) {
        return await page.accountHistoryPage.verifyToAddress(accToAddress);
    });

    this.Then(/^Amount is "([^"]*)"$/, async function (sentAmount) {
        return await page.accountHistoryPage.verifySentAmount(sentAmount);
    });

    this.Then(/^Amount fee is "([^"]*)"$/, async function (sentFee) {
        return await page.accountHistoryPage.verifySentFee(sentFee);
    });

    this.Then(/^Status is "([^"]*)"$/, async function (status) {
        return await page.accountHistoryPage.verifyTransStatus(status);
    });
};