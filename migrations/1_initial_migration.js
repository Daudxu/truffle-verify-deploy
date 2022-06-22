const Airdropper = artifacts.require("Airdropper");

module.exports = function(deployer) {
  deployer.deploy(Airdropper);
};
