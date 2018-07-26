require('babel-register');
require('babel-polyfill');
require('dotenv').config();

let livechainHost = '172.16.1.135';
let livechainPort = 8777;
let sidechainHost = '172.16.1.135';
let sidechainPort = 8666;

if (process.env.LIVECHAIN_HOST !== undefined) {
    livechainHost = process.env.LIVECHAIN_HOST;
}
if (process.env.LIVECHAIN_PORT !== undefined) {
    livechainPort = process.env.LIVECHAIN_PORT;
}
if (process.env.SIDECHAIN_HOST !== undefined) {
    sidechainHost = process.env.SIDECHAIN_HOST;
}
if (process.env.SIDECHAIN_PORT !== undefined) {
    sidechainPort = process.env.SIDECHAIN_PORT;
}


let mochaConfig = {};
if (process.env.BUILD_TYPE === 'CI') {
    mochaConfig = {
        reporter: 'mocha-junit-reporter',
        reporterOptions: {
            mochaFile: 'result.xml',
        },
    };
}

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
        },
        sidechain: {
            host: sidechainHost,
            port: sidechainPort,
            network_id: '*', // eslint-disable-line camelcase
            gas: 10000000
        },
        livenet: {
            host: livechainHost,
            port: livechainPort,
            network_id: '*', // eslint-disable-line camelcase
        },

    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    mocha: mochaConfig,
};
