module.exports = function () {
    this.Given(/^Profiles page is displayed$/, async function () {
        return await page.marketProfilesPage.waitForMarketProfilesPageLoading();
    });

    this.When(/^Click the Profile address "([^"]*)"$/, async function (profileAddress) {
        return await page.marketProfilesPage.navigateToProfileItemPage(profileAddress);
    });
};