module.exports = {
    elements: {
        deleteAccountPopupHeader: by.className(
            'sonm-account-delete-confirmation__header',
        ),
        accountName: by.css(
            '.sonm-account-delete-confirmation *> .sonm-account-item__name-text',
        ),
        cancelButton: by.xpath('//button[.="Cancel"]'),
        deleteButton: by.xpath('//button[.="Delete"]'),
    },

    //wait for page loading according to displayed delete account header

    waitForDeleteAccountPopup: async function() {
        await driver.wait(
            until.elementTextIs(
                driver.wait(
                    until.elementLocated(
                        this.elements.deleteAccountPopupHeader,
                    ),
                ),
                'Are you sure you want to delete this account?',
            ),
            80000,
        );
    },

    //verify account name for delete from wallet

    verifyAccountNameForDelete: async function(accName) {
        (await shared.wdHelper.findVisibleElement(this.elements.accountName))
            .getText()
            .then(text => expect(text).to.equal(accName));
    },

    //click cancel delete button

    clickCancelDeleteAccountButton: async function() {
        return (await shared.wdHelper.findVisibleElement(
            this.elements.cancelButton,
        )).click();
    },

    //click delete button

    clickDeleteButton: async function() {
        return (await shared.wdHelper.findVisibleElement(
            this.elements.deleteButton,
        )).click();
    },
};
