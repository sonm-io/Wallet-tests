let SimpleGatekeeper = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SNM = artifacts.require('./SNM.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let token = await SNM.deployed();
            await token.transfer(SimpleGatekeeper.address, 440 * 1e6 * 1e18, {from: mainKey, gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let token = await SNM.deployed();
            await token.transfer(SimpleGatekeeper.address, 440 * 1e6 * 1e18);
        }
    });
};
