defaultContract = "0x007ccffb7916f37f7aeef05e8096ecfbe55afc2f";
KYC1 = '0x074dbe6017d6cb0bfb594046f694da8b7dc31266';
KYC2 = '0xf9c176c276dc8c04ee9f01166f70fd238e5a16cf';
KYC3 = '0xbeeeff0a0f4dd2dbacfbf4ff4d4838962f761cc4';
KYC4 = '0xac4b829daa17c686ac5264b70c9f4d9ce54a2ec9';
mainKey = '0x5d540435d1aacb744af9ab49358ce237e562b614';

web3.personal.unlockAccount(defaultContract, "", 0);
web3.personal.unlockAccount(KYC1, "111111111", 0);
web3.personal.unlockAccount(KYC2, "111111111", 0);
web3.personal.unlockAccount(KYC3, "111111111", 0);
web3.personal.unlockAccount(KYC4, "111111111", 0);
web3.personal.unlockAccount(mainKey, "11111111", 0);

console.log("account " + defaultContract + " unlocked");
console.log("account " + mainKey + " unlocked");
console.log("account " + KYC1 + " unlocked");
console.log("account " + KYC2 + " unlocked");
console.log("account " + KYC3 + " unlocked");
console.log("account " + KYC4 + " unlocked");
var config = {};
var transactions = {};

var defaults = {
    interval_ms: 1000,
    initial_ether: 15000000000000000000,
    mine_pending_txns: true,
    confirmations: 5
};

(function () {
    var main = function () {
        for (var key in defaults) {
            if (config[key] === undefined) {
                config[key] = defaults[key];
            }
        }
        var miner_obj = miner;

        miner_obj.stop();
        start_periodic_mining(config, miner_obj);

    };
    var start_periodic_mining = function (config, miner_obj) {
        var last_mined_ms = Date.now();
        var timeout_set = false;

        miner_obj.start();
        web3.eth.filter("latest").watch(function () {

            timeout_set = true;

            var now = Date.now();
            var ms_since_block = now - last_mined_ms;
            last_mined_ms = now;

            var next_block_in_ms;

            if (ms_since_block > config.interval_ms) {
                next_block_in_ms = 0;
            } else {
                next_block_in_ms = (config.interval_ms - ms_since_block);
            }

            miner_obj.stop();
            console.log("== Looking for next block in " + next_block_in_ms + "ms");

            setTimeout(function () {
                console.log("== Looking for next block");
                timeout_set = false;
                miner_obj.start();
            }, next_block_in_ms);
        });
    };
    main();
})();