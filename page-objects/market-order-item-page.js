module.exports = {
    elements: {
        marketDealsHeader: by.css('.sonm-app-common-block__title'),
        orderAddress: by.css('sonm-hash__line'),
        orderStatus: by.css('.sonm-profile-brief__status.sonm-profile-brief__ident-value'),
        passwordField: by.css('input[type="password"]'),
        orderPriceValue: by.css('.sonm-balance__number'),
        buyButton: by.css(".confirmation-panel__submit-button")
    },

    //wait for load account history page

    waitForMarketOrderItemPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.marketDealsHeader, "Market orders");
    },

    //verify that order address is correct

    verifyOrderAddress: async function (expectedOrderAddress) {
        let actualOrderAddress = await (await shared.wdHelper.findVisibleElement(this.elements.accountAddress)).getText();
        return await expect(actualOrderAddress.split().join().replace(/\n/, "")).to.equal(expectedOrderAddress);
    },

    verifyOrderStatus: async function (expectedOrderStatus) {
        return await shared.wdHelper.verifyTextElement(this.elements.orderStatus, expectedOrderStatus);
    },

    //fill account password field

    fillPasswordField: async function (password) {
        return (await shared.wdHelper.verifyTextElement(this.elements.orderStatus)).sendKeys(password);
    },

    //verify Order price

    verifyOrderPrice: async function(expectedOrderPrice){
        return await shared.wdHelper.verifyTextElement(this.elements.orderPriceValue, expectedOrderPrice);
    },

    //click the Buy button for further Order purchase

    buyOrder: async function () {
        return (await shared.wdHelper.verifyTextElement(this.elements.buyButton)).click();
    }

};