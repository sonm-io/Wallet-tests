module.exports = {
    elements: {
        logoutButton: by.xpath('//a[@href="#exit"]'),
        addTokenButton: by.xpath('//a[.="+ ADD TOKEN"]'),
        exportWalletButton: by.css('sonm-accounts__export-wallet-button'),
        importAccountButton: by.xpath('//button[.="IMPORT ACCOUNT"]'),
        createNewAccountButton: by.xpath('//button[.="CREATE ACCOUNT"]'),
        walletsHeader: by.className('sonm-wallets__header'),
        balanceHeader: by.className('sonm-currency-balance-list__header'),
        accountNames: by.className('sonm-account-item__name-text'),
        myFundsList: by.css('.sonm-currency-balance-list__list'),
        fundItem: by.css('.sonm-currency-balance-list__list .sonm-balance__symbol'),
        customToken: by.css('.sonm-currency-balance-list__list .sonm-deletable-item .sonm-balance__symbol')
    },

    //wait for load accounts page according to displayed import account button

    waitForAccountPageLoading: async function () {
        return await shared.wdHelper.findVisibleElement(this.elements.importAccountButton);
    },


    //logout from wallet

    logoutFromWallet: async function () {
        return await (await shared.wdHelper.findVisibleElement(this.elements.logoutButton)).click();
    },

    //click on import account button for further account import

    importAccount: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.importAccountButton)).click();
    },

    //click on create account button for further account creating

    createNewAccount: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.createNewAccountButton)).click();
    },

    //click on add token button for further new token creating

    addToken: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addTokenButton)).click();
    },

    //verify that created token is displayed in the token list

    findTokenInList: async function (createdToken) {
        return await shared.wdHelper.findVisibleElement(by.xpath('//span[.="' + createdToken + '"]'));
    },

    //delete token from list

    clickDeleteTokenButton: async function (tokenName) {
        return (await shared.wdHelper.findVisibleElement(by.css('.sonm-currency-balance-list__item .sonm-deletable-item:nth-of-type(' +
            (await shared.wdHelper.getElementPosition(this.elements.customToken, tokenName)) + ') > button'))).click();
    },

    //verify that token is deleted from list

    verifyThatTokenIsDeletedFromList: async function (deletedTokenName) {
        let tokenElement = await driver.wait(until.stalenessOf(driver.findElement(by.xpath('//span[.="' + deletedTokenName + '"]'))));
        await expect(tokenElement).to.equal(true);
    },

    //find account by name in the list

    findAccountInList: async function (name) {
        return shared.wdHelper.findVisibleElements(by.xpath('//span[@class="sonm-account-item__name-text"][.="'
            + name + '"]'))
            .then(elements => expect(elements.length).to.equal(1));
    },

    //find account by name and hash in the list

    findAccountInListWithHash: async function (hash) {
        let accHash = await shared.wdHelper.findVisibleElements(by.xpath('//a[@href="#' + hash + '"]'));
        return await expect(accHash.length).to.equal(1);
    },

    //click on account from the list

    clickOnAccountInList: async function (accountName) {
        return (await shared.wdHelper.findVisibleElement(by.xpath('//div[@class="sonm-deletable-item__children"][.//span[contains(text(), "' +
            accountName + '")]]//a[@href="#"]'))).click();
    }
};