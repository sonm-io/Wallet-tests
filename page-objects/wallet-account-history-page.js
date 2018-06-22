const moment = require("moment");

module.exports = {
    elements: {
        marketHistoryHeader: by.css('.sonm-app-common-block__title'),
        selectedAccountName: by.css('.sonm-account-item__name-text'),
        selectedAccountAddress: by.css('.sonm-account-item__address a'),
        dateText: by.css('.sonm-tx-list__cell-time div:nth-of-type(2)'),
        fromAddressName: by.css('.sonm-tx-list__cell-from .sonm-tx-list__cell-from-name'),
        fromAddress: by.css('.sonm-tx-list__cell-from-addr'),
        toAddressName: by.css('.sonm-tx-list__cell-to .sonm-tx-list__cell-from-name'),
        toAddress: by.css('.sonm-tx-list__cell-to-hash'),
        amountText: by.css('.sonm-tx-list__cell-amount-value'),
        feeText: by.css('.sonm-tx-list__cell-amount-fee'),
        txHash: by.css('.sonm-tx-list__cell-hash .sonm-hash'),
        status: by.css('.sonm-tx-list__cell-status .sonm-tx-list__cell-status')
    },

    //wait for load account history page

    waitForWalletHistoryPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.marketHistoryHeader, "History");
    },

    //wait for load accounts page according to displayed import account button

    verifyThatAccountHistoryIsSelected: async function (accountName) {
        return await shared.wdHelper.waitForElementTextIs(this.elements.selectedAccountName, accountName);
    },

    //verify selected Account address

    verifySelectedAccountAddress: async function (expectedAccountAddress) {
        let actualAccountAddress = await (await shared.wdHelper.findVisibleElement(this.elements.selectedAccountAddress)).getText();
        return await expect(actualAccountAddress.split().join().replace(/\n/, "")).to.equal(expectedAccountAddress);
    },

    //verify transaction date according to date mask

    verifyTransactionDate: async function () {
        return await shared.wdHelper.verifyTextElement(this.elements.dateText, moment().format("D MMM YY"));
    },

    //verify Account From address name

    verifyFromAddressName: async function (expectedFromAddressName) {
        return await shared.wdHelper.verifyTextElement(this.elements.fromAddressName, expectedFromAddressName);
    },

    //verify Account From address

    verifyFromAddress: async function (expectedFromAddress) {
        let actualFromAddress = await (await shared.wdHelper.findVisibleElement(this.elements.fromAddress)).getText();
        return await expect(actualFromAddress.split().join().replace(/\n/, "")).to.equal(expectedFromAddress);
    },

    //verify Account To address name

    verifyToAddressName: async function (expectedToAddressName) {
        return await shared.wdHelper.verifyTextElement(this.elements.toAddressName, expectedToAddressName);
    },

    //verify Account To address

    verifyToAddress: async function (expectedToAddress) {
        let actualToAddress = await (await shared.wdHelper.findVisibleElement(this.elements.toAddress)).getText();
        return await expect(actualToAddress.split().join().replace(/\n/, "")).to.equal(expectedToAddress);
    },

    //verify sent currency amount

    verifySentAmount: async function (sentAmount) {
        let actualSentAmount = await (await shared.wdHelper.findVisibleElement(this.elements.amountText)).getText();
        return await expect(actualSentAmount.split().join().replace(/\n/, " ")).to.equal(sentAmount);
    },

    //verify sent fee

    verifySentFee: async function (feeAmount) {
        let actualFeeAmount = await (await shared.wdHelper.findVisibleElement(this.elements.feeText)).getText();
        return await expect(actualFeeAmount.split().join().replace(/\n/, " ")).to.equal(feeAmount);
    },

    //verify transaction status

    verifyTransStatus: async function (expectedStatus) {
        return await shared.wdHelper.verifyTextElement(this.elements.status, expectedStatus);
    }
};