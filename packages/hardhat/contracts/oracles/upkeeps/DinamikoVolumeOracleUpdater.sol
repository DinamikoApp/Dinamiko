//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IDinamikoVolumeOracle.sol";
import "../..//subscriptions/base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../oracles/interfaces/IDinamikoFeedOracle.sol";

contract DinamikoVolumeOracleUpdater is ConfirmedOwner, Pausable, AutomationCompatibleInterface {
  KeeperRegistrarInterface private immutable i_registrar;
  IDinamikoVolumeOracle[] volumeOracles;
  uint public immutable interval;
  uint public lastTimeStamp;

  constructor(
    KeeperRegistrarInterface _registrar,
    uint updateInterval,
    address[] memory _volumeOracles
  ) ConfirmedOwner(msg.sender) {
    interval = updateInterval;
    lastTimeStamp = block.timestamp;
    i_registrar = KeeperRegistrarInterface(_registrar);
    _setOracleAddresses(_volumeOracles);
  }

  /**
   * @notice function to check if an upkeep needs to be performed
   * @param checkData passed in by the chainlink node/operator
   *
   * @return upkeepNeeded upkeepNeeded returns if the upkeep is needed or not
   * @return performData
   */

  function checkUpkeep(
    bytes calldata checkData
  ) external view override whenNotPaused returns (bool upkeepNeeded, bytes memory performData) {
    upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
    performData = checkData;
  }

  /**
   *  @notice handles the automatic execution of subscriptions
   *  @dev additional checks are performed before the upkeep is performed
   */
  function performUpkeep(bytes calldata /* performData */) external override {
    if ((block.timestamp - lastTimeStamp) > interval) {
      for (uint i = 0; i < volumeOracles.length; i++) {
        volumeOracles[i].requestVolumeData();
      }
      lastTimeStamp = block.timestamp;
    }
  }

  function pause() public onlyOwner {
    _pause();
  }

  function _setOracleAddresses(address[] memory oracles) internal {
    volumeOracles = new IDinamikoVolumeOracle[](oracles.length);
    for (uint256 i = 0; i < oracles.length; i++) {
      volumeOracles[i] = IDinamikoVolumeOracle(oracles[i]);
    }
  }
}
