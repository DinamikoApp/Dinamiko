// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../TradingVolumeBased.sol";
import "../base/interfaces/IKeeperRegistrarInterface.sol";

contract TradingVolumeBasedFactory {
  mapping(address => address) public owners;
  KeeperRegistrarInterface private immutable registrar;
  uint public immutable interval;
  address public immutable currency;

  constructor(address _registrar, uint _interval, address _currency) {
    registrar = KeeperRegistrarInterface(_registrar);
    interval = _interval;
    currency = _currency;
  }

  function createTradingVolumeBasedContract() public returns (address) {
    TradingVolumeBased newTradingVolumeBased = new TradingVolumeBased(registrar, interval, currency);
    owners[msg.sender] = address(newTradingVolumeBased);
    return address(newTradingVolumeBased);
  }
}
