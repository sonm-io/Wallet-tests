module.exports = {
    elements: {
        addTokenPopupHeader: by.xpath('//form/h3'),
        tokenAddressField: by.xpath('//input[@name="address"]'),
        addTokenButton: by.xpath('//button[.="Add token"]')
    },

    //wait for load account page according to displayed header

    waitAddTokenDialogue: async function () {
        return await driver.wait(until.elementTextIs(driver.wait(until.elementLocated(this.elements.addTokenPopupHeader),
        ), 'Add token'), 80000);
    },

    //fill account password for further token request

    fillTokenAddressField: async function (tokenAddress) {
        return (await shared.wdHelper.findVisibleElement(this.elements.tokenAddressField)).sendKeys(tokenAddress);
    },

    //request tokens

    clickAddTokenButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.addTokenButton)).click();
    },

    verifyThatTokenIsDeletedFromList: async function (deletedTokenName) {
        let tokenElement = await driver.wait(until.stalenessOf(driver.findElement(by.xpath('//span[.="' + deletedTokenName + '"]'))));
        await expect(tokenElement).to.equal(true);
    }
};