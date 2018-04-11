var SNMT = artifacts.require('./SNMT.sol');

module.exports = async function(deployer) {
    await deployer.deploy(SNMT);
};
