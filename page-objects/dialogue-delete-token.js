module.exports = {
    elements: {
        deleteTokenPopupHeader: by.xpath('//div/h3'),
        tokenName: by.css('.sonm-token-delete-confirmation__info .sonm-balance__symbol'),
        cancelButton: by.xpath('//button[.="Cancel"]'),
        deleteButton: by.xpath('//button[.="Delete"]')
    },

    //wait for page loading according to displayed delete account header

    waitForDeleteTokenPopup: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.deleteTokenPopupHeader, shared.messages.dialogues.deleteTokenTitle);
    },

    //verify account name for delete from wallet

    verifyTokenNameForDelete: async function (tokenName) {
        return await shared.wdHelper.verifyTextElement(this.elements.tokenName, tokenName);
    },

    //click cancel delete button

    clickCancelDeleteTokenButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.cancelButton)).click();
    },

    //click delete button

    clickDeleteToken: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.deleteButton)).click();
    },

    validateAddNewTokenAddressField: async function () {
        return await page.common.verifyValidationErrorMessage(by.css('.sonm-form-field__help'),
            shared.messages.addNewToken.existingTokenValidationMessage);
    }
};