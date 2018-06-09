module.exports = function () {
    this.Then(/^Profile "([^"]*)" page is displayed$/, async function (profileName) {
        return await page.marketProfileItemPage.waitForMarketProfileItemPageLoading(profileName);
    });

    this.Then(/^Profile account address is "([^"]*)"$/, async function (profileAddress) {
        return await page.marketProfileItemPage.verifyAccountAddress(profileAddress);
    });

    this.When(/^Click the Go to Orders button$/, async function () {
        return await page.marketProfileItemPage.navigateToOrdersList();
    });

    this.Then(/^Orders page is displayed$/, async function () {
        return await page.marketOrdersPage.waitForMarketDealsPageLoading();
    });
};