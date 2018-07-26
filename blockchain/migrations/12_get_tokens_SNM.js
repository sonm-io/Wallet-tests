let TestnetFaucet = artifacts.require('./TestnetFaucet.sol');
let SimpleGatekeeperWithLimitLive = artifacts.require('./SimpleGatekeeperWithLimitLive.sol');
let mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

module.exports = function (deployer, network) {
    let accs = [
        '0x53b14178576e5597a0ab529ba8ba46166599c3af',
        '0xb8d3051d9a97247e592cbc49a1dc14cfa2c0aee0',
        '0x718db7fa19c11cc9194446ccbdf8fcda136f7def',
        '0x3be5424b83fb410703d357907f1e9cdb0f7279fd',
        '0xfd0c80ba15cbf19770319e5e76ae05012314608f',
        '0x88057f14236687831e1fd205e8efb9e45166fe72',
        '0x9bb7510dfce448af7b3588291ca8b1362e19d250',
        '0xa62ce519e29976d340790e2e61058346506b8ac1',
        '0x38df4ef3eadd3c8881540d9e10dc563abbc3a521',
        '0x8f890bb038859234db3f397bb2474713defee42c',
        '0xe32067c8ccc197ea7a5e6ad1ba45444aeb75bba3',
        '0xd1017e7e8fabfbfebd5b8eb47ded71180a861757'
    ];
    deployer.then(async () => { // eslint-disable-line promise/catch-or-return
        if (network === 'livenet') {
            let tnf = await TestnetFaucet.deployed();
            for (i = 0; i < accs.length; i++) {
                await tnf.mintToken(accs[i], 1000000000000000000000, {from: mainKey});
            }
            //get tokens for gatekeeper
            await tnf.mintToken(SimpleGatekeeperWithLimitLive.address, 100000000000000000000000000, {from: mainKey});
        }
    });
};