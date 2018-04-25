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

module.exports = {
    findVisibleElement: async function(locator, timeout = 30) {
        let element = await driver.wait(until.elementLocated(locator), timeout * 1000);
        await driver.wait(until.elementIsVisible(element));
        await expect(element.length).to.not.equal(0);
        return await element;
    },

    findVisibleElements: async function(locator, timeout = 32) {
        let elementsList = await driver.wait(until.elementsLocated(locator), timeout * 1000);
        return await elementsList;
    },

    waitElementIsNotVisible: async function(locator) {
        let el = await driver.findElement(locator);
        return await driver.wait(until.elementIsNotVisible(el));
    },

    //get element index in list for further operations (delete, edit etc.)

    getElementPosition: async function(elements, elementName){
        let elementsList = await driver.findElements(elements);
        for (let i = 0; i < elementsList.length; i++) {
            if (await elementsList[i].getText() === elementName) {
                return i += 1;
            }
        }
    },

    loadWalletToStorage: function(wallet) {
        loadWalletName(wallet);
        return loadWalletContent(wallet);
    },

    loadWalletsToStorage: function(wallets) {
        //shared.config.DEBUG && console.log("window.localStorage.setItem('sonm_wallets','" + JSON.stringify(wallets.names) + "')");
        driver.executeScript(
            "window.localStorage.setItem('sonm_wallets','" +
                JSON.stringify(wallets.names) +
                "')",
        );
        wallets.content.forEach(function(element) {
            loadWalletContent(element);
        });
    },

    //doesn't work
    loadHideDisclaimerToStorage: function() {
        driver.executeScript(
            "window.localStorage.setItem('sonm-hide-disclaimer','1')",
        );
    },

    resolve: function(o, s) {
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
};
