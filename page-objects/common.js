module.exports = {
    elements: {
        walletMenuButton: by.xpath('//button[.="Wallet"]'),
        marketMenuButton: by.xpath('//button[.="Market"]'),
        accountsMenuOption: by.css('button[value="/wallet/accounts"]'),
        historyMenuOption: by.css('button[value="/wallet/history"]'),
        sendMenuOption: by.css('button[value="/wallet/send"]'),
        profilesMenuOption: by.css('button[value="/market/profiles"]'),
        depositMenuOption: by.css('button[value="/market/dw/deposit"]'),
        withdrawMenuOption: by.css('button[value="/market/dw/withdraw"]'),
        historyMarketMenuOption: by.css('button[value="/market/dw/history"]'),
        dealsMenuOption: by.css('button[value="/market/deals"]'),
        select: by.className('sonm-account-big-select'),
        selectedAccount: by.className('sonm-account-item__name-text'),
        successNotification: by.css('.sonm-alert-list__item.sonm-alert--success'),
        successNotificationCross: by.css('.sonm-alert__cross'),
        marketAccountDropdown: by.css(".sonm-market-account__button"),
        nextBtn: by.css('.sonm-button.sonm-button--color-violet'),
        backBtn: by.css('.sonm-button--color-blue.sonm-button--transparent')
    },

    //open Wallet menu

    openWalletMenu: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.walletMenuButton)).click();
    },

    //navigate to send tab

    navigateToSendTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.sendMenuOption)).click();
    },

    //navigate to account tab

    navigateToAccountTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.accountsMenuOption)).click();
    },

    //navigate to account tab

    navigateToHistoryTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.historyMenuOption)).click();
    },

    //open Market menu

    openMarketMenu: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.marketMenuButton)).click();
    },

    //navigate to market profiles tab

    navigateToProfilesTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.profilesMenuOption)).click();
    },

    //navigate to market deposit tab

    navigateToDepositTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.depositMenuOption)).click();
    },

    //navigate to market withdraw tab

    navigateToWithdrawTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.withdrawMenuOption)).click();
    },

    //navigate to market history tab

    navigateToMarketHistoryTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.historyMarketMenuOption)).click();
    },

    //navigate to market deals tab

    navigateToDealsTab: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.dealsMenuOption)).click();
    },

    //select account from market account dropdown

    selectMarketAccount: async function (marketAccountName) {
        return await selectFromStandardDropdown(this.elements.marketAccountDropdown, by.xpath('//div[3]/div//div[.="' +
            marketAccountName + '"]'), by.css('.sonm-app-header__item .sonm-market-select-item__name'), marketAccountName)
    },

    // verify part of notification

    verifyNotificationText: async function (text) {
        return (await shared.wdHelper.findVisibleElement(this.elements.successNotification))
            .getText()
            .then(validMessageText => {
                expect(validMessageText).to.contain(shared.messages.tx.successtx);
                expect(validMessageText).to.contain(text);
            });
    },

    // close notification

    closeNotification: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.successNotificationCross)).click();
    },

    //verify that element is displayed on page

    checkElementIsDisabled: async function (el, cssValue, expectedCssValue) {
        const webElement = await driver.wait(until.elementLocated(el));
        const actualCssValue = await webElement.getCssValue(cssValue);
        return expect(actualCssValue).to.equal(expectedCssValue);
    },

    //select value from dropdown

    //TODO refactor

    selectFromStandardDropdown: async function (element, dropdownItem, selectedItem, name) {
        await (await shared.wdHelper.findVisibleElement(element)).click();
        await (await shared.wdHelper.findVisibleElement(dropdownItem)).click();
        return (await shared.wdHelper.findVisibleElement(selectedItem))
            .getText()
            .then(text => expect(text).to.equal(name));
    },

    //get all values from dropdown

    getValuesFromDropdown: async function (dropdown, dropdownValue) {
        (await shared.wdHelper.findVisibleElement(dropdown)).click();
        let values = await shared.wdHelper.findVisibleElements(dropdownValue);
        let valuesText = [];
        for (el of values) {
            valuesText.push(await el.getText());
        }
        return await valuesText;
    },

    //click on dropdown

    clickDropdown: async function (element) {
        return (await shared.wdHelper.findVisibleElement(element)).click();
    },

    // click next button

    clickNextButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.nextBtn)).click();
    },

    // click back button

    clickBackButton: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.backBtn)).click();
    },

    //assert array to string

    assertDropdownValues: async function (arrayOne, searchValue) {
        return await expect(JSON.stringify(arrayOne)).to.equal(searchValue);
    },

    //enter value into dropdown for search

    enterValueForSearch: async function (dropdownSearchField, searchValue) {
        return (await shared.wdHelper.findVisibleElement(dropdownSearchField)).sendKeys(searchValue);
    },

    //verify that validation error message is displayed

    verifyValidationErrorMessage: async function (element, messageText) {
        let messageElement = await shared.wdHelper.findVisibleElement(element);
        return await driver.wait(until.elementTextIs(messageElement, messageText));
    },

    //clear input field

    clearInputField: async function (field) {
        return (await shared.wdHelper.findVisibleElement(field)).clear();
    },

    //verify that field is empty or not

    verifyFieldLength: async function (field) {
        return (await driver.findElement(field)).getAttribute('value');
    },

    //verify that the spinner is not visible in import account form

    verifySpinnerIsNotVisible: async function () {
        await shared.wdHelper.waitElementIsNotVisible(by.css('.sonm-app > .sonm-load-mask'));
    }
};