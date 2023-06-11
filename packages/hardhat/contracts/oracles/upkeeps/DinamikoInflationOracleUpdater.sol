//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IDinamikoInflationOracle.sol";
import "../../subscriptions/base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "../../oracles/interfaces/IDinamikoFeedOracle.sol";

contract DinamikoInflationOracleUpdater is ConfirmedOwner, Pausable, AutomationCompatibleInterface {
  KeeperRegistrarInterface private immutable i_registrar;
  IDinamikoInflationOracle private immutable i_inflationOracle;
  uint private immutable interval;
  uint public lastTimeStamp;

  constructor(
    KeeperRegistrarInterface _registrar,
    uint updateInterval,
    address _inflationOracle
  ) ConfirmedOwner(msg.sender) {
    interval = updateInterval;
    lastTimeStamp = block.timestamp;
    i_inflationOracle = IDinamikoInflationOracle(_inflationOracle);
    i_registrar = KeeperRegistrarInterface(_registrar);
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
      i_inflationOracle.getInflationRate();
      lastTimeStamp = block.timestamp;
    }
  }

  function pause() public onlyOwner {
    _pause();
  }
}
