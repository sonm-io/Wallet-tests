let SNM = artifacts.require('./SNM.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let SimpleGatekeeperWithLimit = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SimpleGatekeeperWithLimitLive = artifacts.require('./SimpleGatekeeperWithLimitLive.sol');
let gatekeeper = '0xe44cc9ece3c6ce5e23f07f7efb79c0e0c93aee2c';

module.exports = function (deployer, network) {
    deployer.then(async () => {
        if (network === 'sidechain') {
            let keeper_side = await deployer.deploy(SimpleGatekeeperWithLimit, SNM.address, 1, {gasPrice: 0});
            await keeper_side.ChangeKeeperLimit(gatekeeper, 1e6 * 1e18, {gasPrice: 0});
        } else if (network === 'livenet') {
            let tnf = await TestnetFaucet.deployed();
            let snmAddress = await tnf.getTokenAddress();
            console.log('SONM TEST token address = ' + snmAddress);
            let keeper = await deployer.deploy(SimpleGatekeeperWithLimitLive, snmAddress, 1);
            await keeper.ChangeKeeperLimit(gatekeeper, 1e6 * 1e18);
        } else {
            let keeper_side = await deployer.deploy(SimpleGatekeeperWithLimit, SNM.address, 1);
            await keeper_side.ChangeKeeperLimit(gatekeeper, 1e6 * 1e18);
        }
    });
};
