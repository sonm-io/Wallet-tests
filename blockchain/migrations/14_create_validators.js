let ProfileRegistry = artifacts.require('./ProfileRegistry.sol');

module.exports = function (deployer, network) {
    let sonm = '0x5d540435d1aacb744af9ab49358ce237e562b614';
    let KYC2 = '0xf9c176c276dc8c04ee9f01166f70fd238e5a16cf';
    let KYC3 = '0xbeeeff0a0f4dd2dbacfbf4ff4d4838962f761cc4';
    let KYC4 = '0xac4b829daa17c686ac5264b70c9f4d9ce54a2ec9';
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let pr = await ProfileRegistry.deployed();
            console.log("Adding sonm validator...");
            await pr.AddSonmValidator(sonm, {gasPrice: 0});
            console.log("Adding validators...");
            pr.AddValidator(KYC2, 2, {gasPrice: 0});
            pr.AddValidator(KYC3, 3, {gasPrice: 0});
            await pr.AddValidator(KYC4, 4, {gasPrice: 0});
            console.log("Creating certificates for validators...");
            pr.CreateCertificate(KYC2, 1102, "SONM KYC2", {gasPrice: 0});//name
            pr.CreateCertificate(KYC2, 1103, "This service allows to elevate profile level to REGISTERED with passing mobile phone registration.", {gasPrice: 0});//description
            pr.CreateCertificate(KYC2, 1104, "https://proxy.test.sonm.com:18080", {gasPrice: 0});//url
            pr.CreateCertificate(KYC2, 1106, "0x0de0b6b3a7640000", {gasPrice: 0});//price
            pr.CreateCertificate(KYC3, 1102, "SONM KYC3", {gasPrice: 0});//name
            pr.CreateCertificate(KYC3, 1103, "This service allows to elevate profile level to IDENTIFIED.", {gasPrice: 0});//description
            pr.CreateCertificate(KYC3, 1104, "https://proxy.test.sonm.com:18080", {gasPrice: 0});//url
            pr.CreateCertificate(KYC3, 1106, "0x0de0b6b3a7640000", {gasPrice: 0});//price
            pr.CreateCertificate(KYC4, 1102, "SONM KYC4", {gasPrice: 0});//name
            pr.CreateCertificate(KYC4, 1103, "This service allows to elevate profile level to PROFESSIONAL.", {gasPrice: 0});//description
            pr.CreateCertificate(KYC4, 1104, "https://proxy.test.sonm.com:18080", {gasPrice: 0});//url
            await pr.CreateCertificate(KYC4, 1106, "0x0de0b6b3a7640000", {gasPrice: 0});//price

        } else if (network === 'livenet') {
            //
        } else {
            let pr = await ProfileRegistry.deployed();
        }
    });

};
