const webdriver = require('selenium-webdriver');

//get Account index in list for further operations (delete, edit etc.)

module.exports = {
    elements: {
        accountName: by.className('sonm-account-item__name-text'),
        accountNameEditButton: by.css('.sonm-account-item__edit-button'),
        accountNameEditField: by.className('sonm-account-item__edit-name'),
        showPrivateKeyButton: by.css('a[href="#show-private-key"]'),
        deleteAccountButton: by.css('.sonm-accounts__list-item > button'),
        accountsList: by.css('.sonm-account-item__name-wrapper')
    },

    //click on Edit button for further account editing

    clickEditAccountNameButton: async function (accountName) {
        return (await shared.wdHelper.findVisibleElement(by.xpath('//span[.="' + accountName + '"]/button'))).click();
    },

    //click on show private key button

    clickShowPrivateKeyButton: async function (accountName) {
        return (await shared.wdHelper.findVisibleElement(by.css('.sonm-accounts__list-item:nth-of-type(' +
            (await shared.wdHelper.getElementPosition(this.elements.accountsList, accountName)) + ') *> a[href="#show-private-key"]'))).click();
    },

    //navigate to account detail page

    navigateToAccountDetailPage: async function (accAddress) {
        return (await shared.wdHelper.findVisibleElement(by.xpath('//a[@href="#' + accAddress + '"]'))).click();
    },

    //clear account name field

    clearAccountNameField: async function () {
        return page.common.clearInputField(this.elements.accountNameEditField);
    },

    //fill account name field

    fillAccountNameField: async function (accName, newAccountName) {
        return (await shared.wdHelper.findVisibleElement(by.xpath('//input[@value="' + accName + '"]'))).sendKeys(newAccountName);
    },

    //apply changes after editing name

    applyEditChanges: async function () {
        return (await shared.wdHelper.findVisibleElement(this.elements.accountNameEditField)).sendKeys(webdriver.Key.ENTER);
    },

    //verify that account is edited

    verifyAccountPresence: async function (editedName) {
        return await shared.wdHelper.findVisibleElement(by.xpath('//span/span[.="' + editedName + '"]'));
    },

    //get account ether amount

    getAccountEtherAmount: async function (accName, etherAmount) {
        let accountEtherAmount = await (await shared.wdHelper.findVisibleElement(by.css('.sonm-accounts__list-item:nth-of-type(' +
            (await shared.wdHelper.getElementPosition(this.elements.accountsList, accName)) + ') *> .sonm-account-item__sonm .sonm-balance__number'))).getText();
        return await expect(accountEtherAmount).to.equal(etherAmount);
    },

    //get account sonm amount

    getAccountSonmAmount: async function (accName, etherAmount) {
        let accountSonmAmount = await (await shared.wdHelper.findVisibleElement(by.css('.sonm-accounts__list-item:nth-of-type(' +
            (await shared.wdHelper.getElementPosition(this.elements.accountsList, accName)) + ') *> .sonm-account-item__ether .sonm-balance__number'))).getText();
        return await expect(accountSonmAmount).to.equal(etherAmount);
    },

    //get total ether amount

    getTotalEtherAmount: async function (expectedEtherAmount) {
        let etherElements = await driver.findElements(by.css('.sonm-account-item__sonm > .sonm-balance__number'));
        const etherAccountsArray = [];
        for (let i = 0; i < etherElements.length; i++) {
            await etherAccountsArray.push(parseInt(await etherElements[i].getText()));
        }
        let totalActualEtherAmount = etherAccountsArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        return await expect(totalActualEtherAmount).to.equal(parseInt(expectedEtherAmount));
    },

    //get total sonm

    getTotalSonmAmount: async function (expectedSonmAmount) {
        let sonmElements = await driver.findElements(by.css('.sonm-account-item__ether > .sonm-balance__number'));
        const sonmAccountsArray = [];
        for (let i = 0; i < sonmElements.length; i++) {
            await sonmAccountsArray.push(parseInt(await sonmElements[i].getText()));
        }
        let totalActualSonmAmount = sonmAccountsArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        return await expect(totalActualSonmAmount).to.equal(parseInt(expectedSonmAmount));
    },


    //TODO refactor

    verifyAccountIsDeleted: async function (deletedAccName) {
        let account = await driver.wait(until.stalenessOf(driver.findElement(by.xpath('//span/span[.="'
            + deletedAccName + '"]'))));
        await expect(account).to.equal(true);
    },

    //click on delete button for further account deleting

    clickDeleteAccountButton: async function (accForDelete) {
        return (await shared.wdHelper.findVisibleElement(by.css('.sonm-accounts__list-item:nth-of-type(' +
            (await shared.wdHelper.getElementPosition(this.elements.accountsList, accForDelete)) + ') > button',))).click();
    },

    //verify that item was not created

    verifyAccountIsNotPresent: async function (accName) {
        let el = await driver.findElements(by.xpath('//span/span[.="' + accName + '"]'),);
        return await expect(el.length).to.equal(0);
    },
};