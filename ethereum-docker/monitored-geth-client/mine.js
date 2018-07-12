defaultContract = "0x007ccffb7916f37f7aeef05e8096ecfbe55afc2f";

web3.personal.unlockAccount(defaultContract, "", 0);
console.log("account " + defaultContract + " unlocked")
var config = {};
var transactions = {};

var defaults = {
    interval_ms: 300000,
    initial_ether: 15000000000000000000,
    mine_pending_txns: true,
    mine_periodically: false,
    mine_normally: false,
    threads: 1,
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
        if (config.mine_pending_txns) start_transaction_mining(config, miner_obj);

    };

    var pendingTransactions = function (config) {
        console.log("== Not confirmed transactions = " + Object.keys(transactions).length);
        if (web3.eth.pendingTransactions === undefined || web3.eth.pendingTransactions === null) {
            return txpool.status.pending || txpool.status.queued;
        }
        else if (typeof web3.eth.pendingTransactions === "function") {
            return web3.eth.pendingTransactions().length > 0;
        }
        else if (Object.keys(transactions).length > 0) {
            Object.keys(transactions).forEach(function (t) {
                var confirmations = web3.eth.blockNumber - web3.eth.getTransaction(t).blockNumber;
                console.log("== Confirmations for transaction [" + t + "] = " + confirmations);
                if (confirmations > config.confirmations) {
                    delete transactions[t];
                    console.log("== Remove transaction [" + t + "] from list");
                }
            });
            return true;
        }
        else {
            return web3.eth.pendingTransactions.length > 0 || web3.eth.getBlock('pending').transactions.length > 0;
        }
    };

    var start_transaction_mining = function (config, miner_obj) {
        web3.eth.filter("pending").watch(function () {

            var ptransactions = web3.eth.getBlock('pending').transactions;
            ptransactions.forEach(function (pt) {
                transactions[pt] = pt;
                console.log("== Added transaction " + pt);
                console.log("== Transactions size =" + Object.keys(transactions).length);
            });

            if (miner_obj.hashrate > 0) return;

            console.log("== Pending transactions! Looking for next block...");
            miner_obj.start(config.threads);
        });

        if (config.mine_periodically) return;

        web3.eth.filter("latest").watch(function () {
            if (!pendingTransactions(config)) {
                console.log("== No transactions left. Stopping miner...");
                miner_obj.stop();
            }
        });
    };
    main();
})();