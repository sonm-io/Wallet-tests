module.exports = {
    elements: {
        transHistoryButton: by.css('.sonm-send-success__icon-history'),
        newTransactionButton: by.css('.sonm-send-success__icon-send')
    },

    //navigate to transactions History page

    clickTransactionHistoryButton: async function () {
        return await (await shared.wdHelper.findVisibleElement(this.elements.transHistoryButton)).click();
    },

    //navigate to Send page

    clickSendTransactionButton: async function () {
        return await (await shared.wdHelper.findVisibleElement(this.elements.newTransactionButton)).click();
    }
};