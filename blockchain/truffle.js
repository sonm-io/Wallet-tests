require('babel-register');
require('babel-polyfill');
require('dotenv').config();
let PrivateKeyProvider = require('truffle-privatekey-provider');

let privateKey = 'af5b4e15128c508e872b4af061f4b095de1838beed390cb328042513b833bde6'; // for test purposes

let sidechainEndpoint = 'http://172.16.1.177:8555';
let livechainEndpoint = 'http://172.16.1.177:8666';


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
            provider: () => new PrivateKeyProvider(privateKey, sidechainEndpoint),
            network_id: '*', // eslint-disable-line camelcase
            gas: 10000000
        },
        livenet: {
            provider: () => new PrivateKeyProvider(privateKey, livechainEndpoint),
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
