module.exports = {
    elements: {
        marketHistoryHeader: by.css('.sonm-account-big-select__option-emty'),
        depositButton: by.css('.sonm-dw-history__deposit-button'),
        withdrawButton: by.css('.sonm-dw-history__withdraw-button')
    },

    //wait for load account history page

    waitForMarketHistoryPageLoading: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.marketHistoryHeader, "D & W History");
    },

    //navigate to Deposit page

    goToDepositPage: async function(){
        return (await shared.wdHelper.findVisibleElement(this.elements.depositButton)).click();
    },

    //navigate to Withdraw page

    goToWithdrawPage: async function(){
        return (await shared.wdHelper.findVisibleElement(this.elements.withdrawButton)).click();
    }
};