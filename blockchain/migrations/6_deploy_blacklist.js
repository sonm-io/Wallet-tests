let Blacklist = artifacts.require('./Blacklist.sol');

module.exports = function (deployer, network) {
    if (network === 'sidechain') {
        deployer.deploy(Blacklist, {gasPrice: 0});
    } else if (network === 'livenet') {
        //
    } else {
        deployer.deploy(Blacklist);
    }
};
