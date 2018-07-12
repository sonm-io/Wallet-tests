let SimpleGatekeeper = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SNM = artifacts.require('./SNM.sol');

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let token = await SNM.deployed();
            await  token.transfer(SimpleGatekeeper.address, 444 * 1e6 * 1e18, {gasPrice: 0});
        } else if (network === 'livenet') {
            //
        } else {
            let token = await SNM.deployed();
            await  token.transfer(SimpleGatekeeper.address, 444 * 1e6 * 1e18);
        }
    });
};
