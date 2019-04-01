var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var MyFirstContract = artifacts.require("./MyFirstContract.sol");
var PlannedPower = artifacts.require("./PlannedPower.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(MyFirstContract);
  deployer.deploy(PlannedPower);
};
``
