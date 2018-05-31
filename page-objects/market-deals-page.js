module.exports = {
    elements: {
        marketDealsHeader: by.css('.sonm-app-common-block__title'),
        searchByAddressField: by.css('input[placeholder="Search by address"]'),
        onlyActiveToggler: by.css('input[name="deals-active"]')
    },

    //wait for load account history page

    waitForMarketDealsPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.marketDealsHeader, "Deals");
    },

    //search Deal by address

    searchDealByAccountAddress: async function (accountAddress) {
        return (await shared.wdHelper.findVisibleElement(this.elements.searchByAddressField)).sendKeys(accountAddress);
    },

    //show all Deals

    showActiveDeals: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.onlyActiveToggler)).click();
    }
};