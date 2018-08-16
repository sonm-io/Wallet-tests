const fs = require("fs");
const CryptoJS = require("crypto-js");

async function encrypt(data, secretKey) {
    return await CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
}

async function decrypt(data, secretKey) {
    let decrypted = CryptoJS.AES.decrypt(data, secretKey);
    return await JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

async function decryptWalletFile(path, secretKey) {
    let content = fs.readFileSync(path, 'utf8');
    return await decrypt(content.substr(4), secretKey);
}

async function saveWalletFile(path, data, secretKey) {
    let content = 'sonm' + await encrypt(data, secretKey);
    await fs.writeFileSync(path, content, err => {
        if (err) throw err;
        console.log("Wallet file saved!");
    });
}

let main = async function () {
    let wallets = [
            {
                path: "sonm-wallet-correct.json",
                password: "1"
            },
            {
                path: "sonm-wallet-correctWithOneAcc.json",
                password: "1"
            },
            {
                path: "sonm-wallet-empty.json",
                password: "11111111"
            },
            {
                path: "sonm-wallet-oneAccount.json",
                password: "11111111"
            },
            {
                path: "sonm-wallet-with3accs.json",
                password: "1"
            },
            {
                path: "sonm-wallet-withToken.json",
                password: "1"
            }
        ]
    ;

    let nodeUrl = 'https://proxy.test.sonm.com:8545';
    let sonmAddress = '0x36218c62f9cc85948ed2988e76c37a2708b40a60';
    let customAddress = '0xfbf3df499d0c17be9dd836bfcfc93ec157632d2a';

    async function modifyWallet(wallet) {
        if (wallet.tokens.length > 1) {
            wallet.tokens[1].address = sonmAddress;
            wallet.tokens[1].contract.gethClient.url = nodeUrl;
            wallet.tokens[1].contract.address = sonmAddress;
        }
        if (wallet.tokens.length > 2) {
            wallet.tokens[2].address = customAddress;
        }

        wallet.settings.chainId = 'testrpc';
        wallet.settings.nodeUrl = nodeUrl;
        return wallet;
    }


    for (let i = 0; i < wallets.length; i++) {
        let file = "newWallets/" + wallets[i].path;
        console.log('wallet:' + wallets[i].path);
        let wallet = await decryptWalletFile(file, wallets[i].password);
        console.log(JSON.stringify(wallet));
        let newWallet = await modifyWallet(wallet);
        console.log(JSON.stringify(newWallet));
        await saveWalletFile('target/' + wallets[i].path, newWallet, "11111111");
        console.log('===========================================================================================')
    }

};
main();