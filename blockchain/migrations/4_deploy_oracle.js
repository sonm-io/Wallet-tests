let OracleUSD = artifacts.require('./OracleUSD.sol');

module.exports = function (deployer, network) {
    if (network === 'sidechain') {
        deployer.deploy(OracleUSD, {gasPrice: 0});
    } else if (network === 'livenet') {
        //
    } else {
        deployer.deploy(OracleUSD);
    }
};
