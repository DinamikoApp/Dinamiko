// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../DataFeedBased.sol";
import "../base/interfaces/IKeeperRegistrarInterface.sol";

contract DataFeedBasedFactory {
  mapping(address => address) public owners;
  KeeperRegistrarInterface private immutable registrar;
  address public immutable feedOracle;
  uint public immutable interval;
  address public immutable currency;

  constructor(address _registrar, address _feedOracle, uint _interval, address _currency) {
    registrar = KeeperRegistrarInterface(_registrar);
    feedOracle = _feedOracle;
    interval = _interval;
    currency = _currency;
  }

  function createDataFeedBasedContract() public returns (address) {
    DataFeedBased newDataFeedBased = new DataFeedBased(feedOracle, registrar, interval, currency);
    owners[msg.sender] = address(newDataFeedBased);
    return address(newDataFeedBased);
  }
}
