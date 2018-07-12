let SNM = artifacts.require('./SNM.sol');
let CUSTOM = artifacts.require('./CUSTOM.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');

module.exports = function (deployer, network) {
    deployer.then(async () => {
        if (network === 'sidechain') {
            await deployer.deploy(SNM, {gasPrice: 0});
        } else if (network === 'livenet') {
            await deployer.deploy(CUSTOM);
            await deployer.deploy(TestnetFaucet);
        } else {
            await deployer.deploy(SNM);
        }
    });
};
