const fs = require("fs");
const CryptoJS = require("crypto-js");

function encrypt(data, secretKey) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
}

function decrypt(data, secretKey) {
    let decrypted = CryptoJS.AES.decrypt(data, secretKey);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

function decryptWalletFile(path, secretKey) {
    let content = fs.readFileSync(path, 'utf8');
    return decrypt(content.substr(4), secretKey);
}

function saveWalletFile(path, data, secretKey) {
    let content = 'sonm' + encrypt(data, secretKey);
    fs.writeFile(path, content, err => {
        if (err) throw err;
        console.log("Wallet file saved!");
    });
}