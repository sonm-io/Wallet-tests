const fs = require("fs");
const CryptoJS = require("crypto-js");

function loadWalletContent(wallet) {
    //shared.config.DEBUG && console.log("window.localStorage.setItem('" + wallet.key + "','" + wallet.value + "')");
    return driver.executeScript(
        "window.localStorage.setItem('" +
        wallet.key +
        "','" +
        wallet.value +
        "')",
    );
}

function loadWalletName(wallet) {
    return driver.executeScript(
        "window.localStorage.setItem('sonm_wallets','" +
        JSON.stringify(wallet.name) +
        "')",
    );
}


function encrypt(data, secretKey) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
}

function decrypt(data, secretKey) {
    let decrypted = CryptoJS.AES.decrypt(data, secretKey);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}


module.exports = {

    //wait element is visible

    findVisibleElement: async function (locator, timeout = 30) {
        let element = await driver.wait(until.elementLocated(locator), timeout * 1000);
        await driver.wait(until.elementIsVisible(element));
        await expect(element.length).to.not.equal(0);
        return await element;
    },

    //wait elements are visible

    findVisibleElements: async function (locator, timeout = 32) {
        let elementsList = await driver.wait(until.elementsLocated(locator), timeout * 1000);
        return await elementsList;
    },

    //wait until element is not visible

    waitElementIsNotVisible: async function (locator) {
        let el = await driver.findElement(locator);
        return await driver.wait(until.elementIsNotVisible(el));
    },

    //verify that element appears or not

    verifyElementAppearing: async function (locator) {
        let element = await driver.findElements(locator);
        if (element.length !== 0) {
            throw new Error("Element is displayed");
        }
    },

    //verify that element's text is matches to expected

    verifyTextElement: async function (locator, expectedText) {
        let actualElementText = await (await shared.wdHelper.findVisibleElement(locator)).getText();
        return await expect(expectedText).to.equal(actualElementText);
    },

    //get element index in list for further operations (delete, edit etc.)

    getElementPosition: async function (elements, elementName) {
        let elementsList = await driver.findElements(elements);
        for (let i = 0; i < elementsList.length; i++) {
            if (await elementsList[i].getText() === elementName) {
                return i += 1;
            }
        }
    },

    //waiting for element's text is appeared

    waitForElementTextIs: async function (locator, text) {
        return await driver.wait(until.elementTextIs(driver.wait(until.elementLocated(locator)),
            text), 100000);
    },

    loadWalletToStorage: function (wallet) {
        loadWalletName(wallet);
        return loadWalletContent(wallet);
    },

    loadWalletsToStorage: function (wallets) {
        //shared.config.DEBUG && console.log("window.localStorage.setItem('sonm_wallets','" + JSON.stringify(wallets.names) + "')");
        driver.executeScript(
            "window.localStorage.setItem('sonm_wallets','" +
            JSON.stringify(wallets.names) +
            "')",
        );
        wallets.content.forEach(function (element) {
            loadWalletContent(element);
        });
    },

    resolve: function (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, ''); // strip a leading dot
        let a = s.split('.');
        for (let i = 0, n = a.length; i < n; ++i) {
            let k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    },

    openWalletFile: function (path, secretKey) {
        let content = fs.readFileSync(path, 'utf8');
        return decrypt(content.substr(4), secretKey);
    },

    saveWalletFile: function (path, data, secretKey) {
        let content = 'sonm' + encrypt(data, secretKey);
        fs.writeFile(path, content, err => {
            if (err) throw err;
        });
    },
};