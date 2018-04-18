var CUSTOM = artifacts.require('./CUSTOM.sol');

module.exports = async function(deployer) {
    await deployer.deploy(CUSTOM);
};
