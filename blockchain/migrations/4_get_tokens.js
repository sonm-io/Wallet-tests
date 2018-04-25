var SNMT = artifacts.require('./SNMT.sol');

module.exports = function (deployer) {
    let accs = [
        '0x53b14178576e5597a0ab529ba8ba46166599c3af',
        '0xb8d3051d9a97247e592cbc49a1dc14cfa2c0aee0',
        '0x718db7fa19c11cc9194446ccbdf8fcda136f7def',
        '0x3be5424b83fb410703d357907f1e9cdb0f7279fd',
        '0xebbab4c50d7c5da77144868c8823ea2a8e045997',
        '0xfd0c80ba15cbf19770319e5e76ae05012314608f',
        '0x88057f14236687831e1fd205e8efb9e45166fe72',
    ];
    let to_feed_accs = [
        '0x9bb7510dfce448af7b3588291ca8b1362e19d250',
        '0xa62ce519e29976d340790e2e61058346506b8ac1',
        '0x38df4ef3eadd3c8881540d9e10dc563abbc3a521'
    ];
    SNMT.deployed().then(async function (snmt) {
        for (i = 0; i < accs.length; i++) {
            console.log('[+++++] get SNMT tokens for ' + accs[i]);
            await snmt.getTokens({from: accs[i]});
        }
        for (i = 0; i < to_feed_accs.length; i++) {
            console.log('[===>>] transfer SNMT tokens to ' + to_feed_accs[i]);
            await snmt.transfer(to_feed_accs[i], 1000000000000000000000, {from: accs[0]});
        }
    });
};