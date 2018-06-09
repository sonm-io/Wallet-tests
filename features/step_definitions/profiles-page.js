module.exports = function () {
    this.Given(/^Profiles page is displayed$/, async function () {
        return await page.marketProfilesPage.waitForMarketProfilesPageLoading();
    });

    this.When(/^Click the Profile address "([^"]*)"$/, async function (profileAddress) {
        return await page.marketProfilesPage.navigateToProfileItemPage(profileAddress);
    });

    this.When(/^Select "([^"]*)" Profile from the Status dropdown$/, async function (profileStatus) {
        return await page.marketProfilesPage.selectProfileStatus(profileStatus);
    });

    this.When(/^Select"([^"]*)" Role from the Roles dropdown$/, async function (profileRole) {
        return await page.marketProfilesPage.selectProfileRole(profileRole);
    });

    this.When(/^Select "([^"]*)" Profile Country from the Countries dropdown$/, async function (profileCountry) {
        return await page.marketProfilesPage.selectCountry(profileCountry);
    });

    this.When(/^Select"([^"]*)" from the Deals Quantity dropdown$/, async function (dealsQuantity) {
        return await page.marketProfilesPage.selectDealsQuantity(dealsQuantity);
    });

    this.When(/^Fill in the Profile Name field "([^"])"$/, async function (profileName) {
        return await page.marketProfilesPage.searchProfileByName(profileName);
    });
};