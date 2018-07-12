let AddressHashMap = artifacts.require('./AddressHashMap.sol');

module.exports = function (deployer, network) {
    if (network === 'sidechain') {
        deployer.deploy(AddressHashMap, {gasPrice: 0});
    } else if (network === 'livenet') {
        //
    } else {
        deployer.deploy(AddressHashMap);
    }
};
