module.exports = {
    elements: {
        deleteTokenPopupHeader: by.xpath('//div/h3'),
        tokenName: by.css('.sonm-token-delete-confirmation__info .sonm-balance__symbol'),
        cancelButton: by.xpath('//button[.="Cancel"]'),
        deleteButton: by.xpath('//button[.="Delete"]')
    },

    //wait for page loading according to displayed delete account header

    waitForDeleteTokenPopup: async function () {
        await driver.wait(until.elementTextIs(driver.wait(until.elementLocated(this.elements.deleteTokenPopupHeader)),
            'Are you sude want to delete token?'), 80000);
    },

    //verify account name for delete from wallet

    verifyTokenNameForDelete: async function (tokenName) {
        (await shared.wdHelper.findVisibleElement(this.elements.tokenName))
            .getText()
            .then(text => expect(text).to.equal(tokenName));
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