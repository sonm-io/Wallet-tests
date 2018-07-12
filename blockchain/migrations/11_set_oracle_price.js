let OracleUSD = artifacts.require('./OracleUSD.sol');
module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let oracle = await OracleUSD.deployed();
            await oracle.setCurrentPrice(1e18, {gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let oracle = await OracleUSD.deployed();
            await oracle.setCurrentPrice(1e18);
        }
    });
};
