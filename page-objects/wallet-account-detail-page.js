module.exports = {
    elements: {
        header: by.xpath('//h1[.="Account"]'),
        accountsDropdown: by.css('sonm-account-big-select'),
        sendEtherBtn: by.xpath('//button[@name="0x"]'),
        sendSnmBtn: by.xpath('//button[@name="0xb29d1e8259571de17429b771ca455210f25b9fce"]'),
        historyBtn: by.xpath('//button[.="View operation history"]'),
        tokensRequestAcPass: by.xpath('//input[@type="password"]'),
        requestTokensBtn: by.xpath('//button[@type="submit"]'),
        alertMessage: by.css('.sonm-alert__message'),
        alertMessageCross: by.css('.sonm-alert__cross'),
        select: by.css('.sonm-account-big-select'),
        selectedAccount: by.css('li .sonm-account-item__name-text')
    },

    //wait for load account page according to displayed header

    waitForAccountDetailPageLoading: async function () {
        return await shared.wdHelper.findVisibleElement(this.elements.header);
    },

    //send ethereum to

    clickSendEthereum: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.sendEtherBtn)).click();
    },

    //send SNM to

    clickSendSnm: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.sendSnmBtn)).click();
    },

    //send custom to

    clickSendCustom: async function (tokenAddress) {
        return (await shared.wdHelper.findVisibleElement('//button[@name="' + tokenAddress + '"]')).click();
    },

    //navigate to viewHistory page

    clickViewHistoryButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.historyBtn)).click();
    },

    //fill account password for further token request

    fillTokenRequestPasswordField: async function (acPassword) {
        return (await shared.wdHelper.findVisibleElement(this.elements.tokensRequestAcPass)).sendKeys(acPassword);
    },

    //request tokens

    clickOnRequestTokensButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.requestTokensBtn)).click();
    },

    //get alert message text

    getAlertMessageText: async function (messageText) {
        return await page.common.verifyValidationErrorMessage((this.elements.alertMessage),
            messageText);
    },

    //close alert message

    closeAlertMessage: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.alertMessageCross)).click();
    },

    //select Account from dropdown

    selectAccountFromDropdown: async function (accName) {
        return page.common.selectFromStandardDropdown(this.elements.select, by.xpath('//li[@title="' + accName + '"]'),
            this.elements.selectedAccount, accName);
    }
};