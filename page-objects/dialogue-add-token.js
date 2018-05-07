module.exports = {
    elements: {
        addTokenPopupHeader: by.xpath('//form/h3'),
        tokenAddressField: by.xpath('//input[@name="address"]'),
        addTokenButton: by.xpath('//button[.="Add token"]')
    },

    //wait for load account page according to displayed header

    waitAddTokenDialogue: async function () {
        return await shared.wdHelper.waitForElementTextIs(this.elements.addTokenPopupHeader, 'Add token');
    },

    //fill account password for further token request

    fillTokenAddressField: async function (tokenAddress) {
        return (await shared.wdHelper.findVisibleElement(this.elements.tokenAddressField)).sendKeys(tokenAddress);
    },

    //request tokens

    clickAddTokenButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addTokenButton)).click();
    },

    //verify that Add Token button is disabled

    verifyThatAddTokenButtonIsDisabled: async function () {
        return await page.common.checkElementIsDisabled(this.elements.addTokenButton, 'cursor', 'not-allowed');
    }
};