module.exports = {
    elements: {
        profileTitle: by.css('.sonm-panel__title'),
        //accountAddress: by.css('.sonm-hash.sonm-profile-details__address-hash')
        goToOrdersButton: by.css('.sonm-profile__orders'),
        profileName: by.css('.sonm-profile-details__main-info dd:nth-of-type(1)')
    },

    //wait for load profile item page

    //TODO refactor

    waitForMarketProfileItemPageLoading: async function (accountName) {
        await shared.wdHelper.waitForElementTextIs(this.elements.profileTitle, 'Account details');
        return await shared.wdHelper.findVisibleElement(by.xpath('.//dd[.="' + accountName + '"]'));
    },

    //verify account address

    verifyAccountAddress: async function (expectedProfileAccountAddress) {
        let actualProfileAddress = await (await shared.wdHelper.findVisibleElement(by.css('.sonm-hash.sonm-profile-details__address-hash'))).getText();
        return await expect(actualProfileAddress.split().join().replace(/\n/, "")).to.equal(expectedProfileAccountAddress);
        console.log(sde);
    },

    //click on Go to Orders button for further redirect to orders page

    navigateToOrdersList: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.goToOrdersButton)).click();
    }
};