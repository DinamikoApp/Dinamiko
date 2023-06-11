// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../InflationBased.sol";
import "../base/interfaces/IKeeperRegistrarInterface.sol";

contract InflationBasedFactory {
  mapping(address => address) public owners;
  KeeperRegistrarInterface private immutable registrar;
  address public immutable inflationOracle;
  uint public immutable interval;
  address public immutable currency;

  constructor(address _registrar, address _inflationOracle, uint _interval, address _currency) {
    registrar = KeeperRegistrarInterface(_registrar);
    inflationOracle = _inflationOracle;
    interval = _interval;
    currency = _currency;
  }

  function createInflationBasedContract() public returns (address) {
    InflationBased newInflationBased = new InflationBased(inflationOracle, registrar, interval, currency);
    owners[msg.sender] = address(newInflationBased);
    return address(newInflationBased);
  }
}
