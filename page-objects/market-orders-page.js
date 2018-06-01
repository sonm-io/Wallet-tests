module.exports = {
    elements: {
        marketDealsHeader: by.css('.sonm-app-common-block__title'),

    },

    //wait for load account history page

    waitForMarketDealsPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.marketDealsHeader, "Market orders");
    },


};