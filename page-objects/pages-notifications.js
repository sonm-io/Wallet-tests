module.exports = {
    elements: {
        sendAddressMessage: by.css('.sonm-form-field--error .sonm-form-field__help'),
        sendAmountMessage: by.css('.sonm-send__row-amount .sonm-form-field__help'),
        sendGasLimitMessage: by.css('.sonm-send__row-gas-limit .sonm-form-field__help'),
        sendPasswordMessage: by.css('.sonm-send-confirm__password-field .sonm-form-field__help'),
        accountNameNewAccountDialogueMessage: by.css('.sonm-form__row:nth-of-type(1) * > .sonm-form-field__help'),
        passwordNewAccountDialogueMessage: by.css('.sonm-form__row:nth-of-type(2) * > .sonm-form-field__help'),
        passwordConfirmationNewAccountDialogueMessage: by.css('.sonm-form__row:nth-of-type(3) * > .sonm-form-field__help'),
        privateKeyNewAccountDialogueMessage: by.css('.sonm-form__row:nth-of-type(4) * > .sonm-form-field__help'),
        createNewWalletNameMessage: by.css('.sonm-login__label:nth-of-type(1) > .sonm-login__label-error'),
        createNewWalletPasswordMessage: by.css('.sonm-login__label:nth-of-type(2) > .sonm-login__label-error'),
        createNewWalletConfirmationPasswordMessage: by.css('.sonm-login__label:nth-of-type(3) > .sonm-login__label-error'),
        depositAmountMessage: by.css('.deposit-withdraw__amount .sonm-form-field__help'),
        depositGasLimitMessage: by.css('.deposit-withdraw__gas-limit .sonm-form-field__help')
    },

    //validate send page amount address field

    validateSendAmountField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.sendAmountMessage, errorMessage);
    },

    //validate send page to address field

    validateSendToAddressField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.sendAddressMessage, errorMessage);
    },

    //validate send page gas limit field

    validateSendGasLimitField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.sendGasLimitMessage,
            shared.messages.send.incorrectGasLimitValidationMessage);
    },

    //validate send Password field

    validateAccountPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.sendPasswordMessage,
            shared.messages.transfercomfirm.incorrectAccountPasswordFieldValidationMessage)
    },

    //validate account name field

    validateNewAccountNameField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.accountNameNewAccountDialogueMessage,
            shared.messages.createAccount.createAccountNameValidationMessage);
    },

    //validate account password field

    validateNewAccountPasswordField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordNewAccountDialogueMessage, errorMessage);
    },

    //validate account confirmation password field

    validateNewAccountConfirmationPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordConfirmationNewAccountDialogueMessage,
            shared.messages.createAccount.createAccountConfirmPasswordValidationMessage);
    },

    //validate account private key field

    validateNewAccountPrivateKeyField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.privateKeyNewAccountDialogueMessage, errorMessage);
    },

    //validate account file

    validateImportAccountFileField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.accountNameNewAccountDialogueMessage, errorMessage);
    },

    //validate account name field

    validateImportAccountNameField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordNewAccountDialogueMessage,
            shared.messages.importAccount.importAccountNameValidationMessage);
    },

    //validate account password field

    validateImportAccountPasswordField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordConfirmationNewAccountDialogueMessage,
            errorMessage);
    },

    //validate private key password field

    validatePrivateKeyPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.sendAddressMessage,
            shared.messages.privateKey.privateKeyIncorrectPasswordValidationMessage);
    },

    //validate wallet name field

    validateCreateWalletNameField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.createNewWalletNameMessage, errorMessage);
    },

    //validate wallet password

    validateCreateWalletPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.createNewWalletPasswordMessage,
            shared.messages.wallet.walletPasswordValidationMessage);
    },

    //validate wallet confirm password

    validateCreateWalletConfirmPasswordField: async function () {
        return await page.common.verifyValidationErrorMessage(this.elements.createNewWalletConfirmationPasswordMessage,
            shared.messages.wallet.walletConfirmPasswordValidationMessage);
    },

    //validate wallet file field

    validateImportWalletFileField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.accountNameNewAccountDialogueMessage,
            errorMessage);
    },

    //validate wallet name field

    validateImportWalletNameField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordNewAccountDialogueMessage,
            errorMessage);
    },

    //validate import wallet password field

    validateImportWalletPasswordField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.passwordConfirmationNewAccountDialogueMessage,
            errorMessage);
    },

    //validate deposit amount field

    validateDepositWithdrawAmountField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.depositAmountMessage, errorMessage);
    },

    //validate deposit gas limit field

    validateDepositWithdrawGasLimitField: async function (errorMessage) {
        return await page.common.verifyValidationErrorMessage(this.elements.gasLimitField, errorMessage);
    }
};