// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../PriceFeedBased.sol";
import "../base/interfaces/IKeeperRegistrarInterface.sol";

contract PriceFeedBasedFactory {
  mapping(address => address) public owners;
  KeeperRegistrarInterface private immutable registrar;
  address public immutable priceOracle;
  uint public immutable interval;
  address public immutable baseCurrency;

  constructor(address _registrar, address _priceOracle, uint _interval, address _baseCurrency) {
    registrar = KeeperRegistrarInterface(_registrar);
    priceOracle = _priceOracle;
    interval = _interval;
    baseCurrency = _baseCurrency;
  }

  function createPriceFeedBasedContract() public returns (address) {
    PriceFeedBased newPriceFeedBased = new PriceFeedBased(priceOracle, registrar, interval, baseCurrency);
    owners[msg.sender] = address(newPriceFeedBased);
    return address(newPriceFeedBased);
  }
}
