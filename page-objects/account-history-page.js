module.exports = {
    elements: {
        selectedAccountName: by.css('.sonm-account-item__name-text'),
        selectedAccountAddress: by.css('.sonm-account-big-select__option > a')
    },

    //wait for load accounts page according to displayed import account button

    waitForHistoryPageLoading: async function (accountName) {
        return await driver.wait(until.elementTextIs(driver.wait(until.elementLocated(this.elements.selectedAccountName)),
            accountName), 80000);
    },

    //verify selected Account address

    verifyAccountAddress: async function (expectedAccountAddress) {
        let actualAccountAddress = await (await shared.wdHelper.findVisibleElement(this.elements.selectedAccountAddress)).getText();
        return await expect(actualAccountAddress.split().join().replace(/\n/, "")).to.equal(expectedAccountAddress);
    },
};