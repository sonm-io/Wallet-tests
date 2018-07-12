let ProfileRegistry = artifacts.require('./ProfileRegistry.sol');

module.exports = function (deployer, network) {
    if (network === 'sidechain') {
        deployer.deploy(ProfileRegistry, {gasPrice: 0});
    } else if (network === 'livenet') {
        //
    } else {
        deployer.deploy(ProfileRegistry);
    }
};
