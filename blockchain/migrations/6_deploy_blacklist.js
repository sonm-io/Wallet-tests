let Blacklist = artifacts.require('./Blacklist.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    if (network === 'sidechain') {
        deployer.deploy(Blacklist, {from: mainKey, gasPrice: 0});
    } else if (network === 'livenet') {
        //
    } else {
        deployer.deploy(Blacklist);
    }
};
