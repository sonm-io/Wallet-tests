let SNM = artifacts.require('./SNM.sol');
let Market = artifacts.require('./Market.sol');
let Blacklist = artifacts.require('./Blacklist.sol');
let OracleUSD = artifacts.require('./OracleUSD.sol');
let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let SimpleGatekeeperWithLimit = artifacts.require('./SimpleGatekeeperWithLimit.sol');
let SimpleGatekeeperWithLimitLive = artifacts.require('./SimpleGatekeeperWithLimitLive.sol');
let ProfileRegistry = artifacts.require('./ProfileRegistry.sol');
let AddressHashMap = artifacts.require('./AddressHashMap.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

let config_live = require('../config_live.json');
const fs = require("fs");
const yaml = require('js-yaml');

function dump(path = 'config.json', config = {addressHashMap: address}, dumpYaml = false) {
    fs.writeFile(path, JSON.stringify(config), err => {
        if (err) throw err;
        console.log("[+] Config file saved!");
    });
    if (dumpYaml) {
        fs.writeFile('../ansible/config.yaml', yaml.dump(config), err => {
            if (err) throw err;
            console.log("[+] YAML config file saved!");
        });
    }
}

module.exports = function (deployer, network) {
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'sidechain') {
            let addrHashmap = await AddressHashMap.deployed();
            addrHashmap.write('masterchainSNMAddress', config_live.masterchainSNMAddress, {from: mainKey, gasPrice: 0});
            addrHashmap.write('gatekeeperMasterchainAddress', config_live.gatekeeperMasterchainAddress, {from: mainKey, gasPrice: 0});
            addrHashmap.write('testnetFaucetAddress', config_live.testnetFaucetAddress, {from: mainKey, gasPrice: 0});
            addrHashmap.write('sidechainSNMAddress', SNM.address, {from: mainKey, gasPrice: 0});
            addrHashmap.write('blacklistAddress', Blacklist.address, {from: mainKey, gasPrice: 0});
            addrHashmap.write('marketAddress', Market.address, {from: mainKey, gasPrice: 0});
            addrHashmap.write('profileRegistryAddress', ProfileRegistry.address, {from: mainKey, gasPrice: 0});
            addrHashmap.write('oracleUsdAddress', OracleUSD.address, {from: mainKey, gasPrice: 0});
            addrHashmap.write('gatekeeperSidechainAddress', SimpleGatekeeperWithLimit.address, {from: mainKey, gasPrice: 0});
            await addrHashmap.write('oracleMultiSigAddress', 0x0, {from: mainKey, gasPrice: 0});
            dump('config.json', {addressHashMap: AddressHashMap.address});
        } else if (network === 'livenet') {
            let tnf = await TestnetFaucet.deployed();
            let snmAddress = await tnf.getTokenAddress();
            let config = {
                masterchainSNMAddress: snmAddress,
                gatekeeperMasterchainAddress: SimpleGatekeeperWithLimitLive.address,
                testnetFaucetAddress: TestnetFaucet.address
            };
            dump('config_live.json', config);
        } else {
            let addrHashmap = await AddressHashMap.deployed();
            addrHashmap.write('masterchainSNMAddress', '0x1ac9e48eb78cde2af37191a850da6f710f241bbb');
            addrHashmap.write('gatekeeperMasterchainAddress', '0xdd675d4e1987f7372c7c2048399a411b44ba7d69');
            addrHashmap.write('sidechainSNMAddress', SNM.address);
            addrHashmap.write('blacklistAddress', Blacklist.address);
            addrHashmap.write('marketAddress', Market.address);
            addrHashmap.write('profileRegistryAddress', ProfileRegistry.address);
            addrHashmap.write('oracleUsdAddress', OracleUSD.address);
            addrHashmap.write('gatekeeperSidechainAddress', SimpleGatekeeperWithLimit.address);
            addrHashmap.write('testnetFaucetAddress', '0x8e95a66e0a038e2325185b10eaae8854c9896835');
            await addrHashmap.write('oracleMultiSigAddress', 0x0);
        }
    });
};
