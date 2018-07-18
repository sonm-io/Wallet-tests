let SNM = artifacts.require('./SNM.sol');
let Market = artifacts.require('./Market.sol');
let Blacklist = artifacts.require('./Blacklist.sol');
let OracleUSD = artifacts.require('./OracleUSD.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let SimpleGatekeeperWithLimit = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SimpleGatekeeperWithLimitLive = artifacts.require('./SimpleGatekeeperWithLimitLive.sol');
let ProfileRegistry = artifacts.require('./ProfileRegistry.sol');
let AddressHashMap = artifacts.require('./AddressHashMap.sol');
const fs = require("fs");

function dump(address) {
    let config = {addressHashMap: address};
    fs.writeFile('config.json', JSON.stringify(config), err => {
        if (err) throw err;
        console.log("[+] Config file saved!");
    });
}

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let addrHashmap = await AddressHashMap.deployed();
            addrHashmap.write('masterchainSNMAddress', '0xcf4aad4a20a4be77bee4527ba10d333b51f83621', {gasPrice: 0});
            addrHashmap.write('gatekeeperMasterchainAddress', '0x8e95a66e0a038e2325185b10eaae8854c9896835', {gasPrice: 0});
            addrHashmap.write('sidechainSNMAddress', SNM.address, {gasPrice: 0});
            addrHashmap.write('blacklistAddress', Blacklist.address, {gasPrice: 0});
            addrHashmap.write('marketAddress', Market.address, {gasPrice: 0});
            addrHashmap.write('profileRegistryAddress', ProfileRegistry.address, {gasPrice: 0});
            addrHashmap.write('oracleUsdAddress', OracleUSD.address, {gasPrice: 0});
            addrHashmap.write('gatekeeperSidechainAddress', SimpleGatekeeperWithLimit.address, {gasPrice: 0});
            addrHashmap.write('testnetFaucetAddress', TestnetFaucet.address, {gasPrice: 0});
            await addrHashmap.write('oracleMultiSigAddress', 0x0, {gasPrice: 0});
            dump(AddressHashMap.address);
        } else if (network === 'livenet') {
            //
        } else {
            let addrHashmap = await AddressHashMap.deployed();
            addrHashmap.write('masterchainSNMAddress', '0xcf4aad4a20a4be77bee4527ba10d333b51f83621');
            addrHashmap.write('gatekeeperMasterchainAddress', '0x8e95a66e0a038e2325185b10eaae8854c9896835');
            addrHashmap.write('sidechainSNMAddress', SNM.address);
            addrHashmap.write('blacklistAddress', Blacklist.address);
            addrHashmap.write('marketAddress', Market.address);
            addrHashmap.write('profileRegistryAddress', ProfileRegistry.address);
            addrHashmap.write('oracleUsdAddress', OracleUSD.address);
            addrHashmap.write('gatekeeperSidechainAddress', SimpleGatekeeperWithLimit.address);
            addrHashmap.write('testnetFaucetAddress', 0x0);
            await addrHashmap.write('oracleMultiSigAddress', 0x0);
        }
    });
};
