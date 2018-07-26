let Market = artifacts.require('./Market.sol');
let Blacklist = artifacts.require('./Blacklist.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let blacklist = await Blacklist.deployed();
            await  blacklist.SetMarketAddress(Market.address, {from: mainKey, gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let blacklist = await Blacklist.deployed();
            await  blacklist.SetMarketAddress(Market.address);
        }
    });
};
