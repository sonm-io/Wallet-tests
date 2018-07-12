let Market = artifacts.require('./Market.sol');
let Blacklist = artifacts.require('./Blacklist.sol');

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let blacklist = await Blacklist.deployed();
            await  blacklist.SetMarketAddress(Market.address, {gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let blacklist = await Blacklist.deployed();
            await  blacklist.SetMarketAddress(Market.address);
        }
    });
};
