let OracleUSD = artifacts.require('./OracleUSD.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let oracle = await OracleUSD.deployed();
            await oracle.setCurrentPrice(1e18, {from: mainKey, gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let oracle = await OracleUSD.deployed();
            await oracle.setCurrentPrice(1e18);
        }
    });
};
