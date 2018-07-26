let SNM = artifacts.require('./SNM.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    deployer.then(async () => {
        if (network === 'sidechain') {
            await deployer.deploy(SNM, {from: mainKey, gasPrice: 0});
        } else if (network === 'livenet') {
            await deployer.deploy(TestnetFaucet, {from: mainKey});
        } else {
            await deployer.deploy(SNM);
        }
    });
};
