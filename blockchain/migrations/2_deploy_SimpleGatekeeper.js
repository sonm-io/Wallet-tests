let SNM = artifacts.require('./SNM.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let SimpleGatekeeperWithLimit = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SimpleGatekeeperWithLimitLive = artifacts.require('./SimpleGatekeeperWithLimitLive.sol');


module.exports = function (deployer, network) {
    deployer.then(async () => {
        if (network === 'sidechain') {
            await deployer.deploy(SimpleGatekeeperWithLimit, SNM.address, 1, {gasPrice: 0});
        } else if (network === 'livenet') {
            let tnf = await TestnetFaucet.deployed();
            let snmAddress = await tnf.getTokenAddress();
            console.log('SONM TEST token address = ' + snmAddress);
            deployer.deploy(SimpleGatekeeperWithLimitLive, snmAddress, 1);
        } else {
            await deployer.deploy(SimpleGatekeeperWithLimit, SNM.address, 1);
        }
    });
};
