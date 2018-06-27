module.exports = function () {
    this.Then(/^Deals page is displayed$/, async function () {
        return await page.marketDealsPage.waitForMarketDealsPageLoading();
    });

    this.Then(/^Fill in the Search by Address field "([^"]*)" $/, async function (address) {
        return await page.marketDealsPage.searchDealByAccountAddress(address);
    });

    this.Then(/^Click the Only Active toggle" $/, async function () {
        return await page.marketDealsPage.clickOnlyActiveToggle();
    });
};