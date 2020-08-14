var YorkToken = artifacts.require("./YorkToken.sol");
var YorkTokenSale = artifacts.require("./YorkTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(YorkToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(YorkTokenSale, YorkToken.address, tokenPrice);
  });
};
