// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/interfaces/IKeeperRegistrarInterface.sol";
import "../TimeBasedSubscription.sol";

contract TimeBasedFactory {
  mapping(address => address) public owners;
  KeeperRegistrarInterface private immutable registrar;
  address public immutable priceOracle;
  uint public immutable interval;
  address public immutable currency;

  constructor(address _registrar, address _priceOracle, uint _interval, address _currency) {
    registrar = KeeperRegistrarInterface(_registrar);
    priceOracle = _priceOracle;
    interval = _interval;
    currency = _currency;
  }

  function createTimeBasedContract() public returns (address) {
    TimeBasedSubscription newTimeBased = new TimeBasedSubscription(priceOracle, registrar, interval, currency);
    owners[msg.sender] = address(newTimeBased);
    return address(newTimeBased);
  }
}
