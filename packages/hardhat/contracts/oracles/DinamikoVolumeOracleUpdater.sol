//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDinamikoVolumeOracle.sol";
import "../subscriptions/base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../oracles/interfaces/IDinamikoFeedOracle.sol";
import "hardhat/console.sol";

contract DinamikoVolumeOracleUpdater is ChainlinkClient, ConfirmedOwner, Pausable, AutomationCompatibleInterface {
  using Chainlink for Chainlink.Request;

  address private oracleId;
  string private jobId;
  uint256 private fee;
  KeeperRegistrarInterface private immutable i_registrar;
  IDinamikoVolumeOracle volumeOracle;

  uint public immutable interval;
  uint public lastTimeStamp;

  address public baseCurrency;

  constructor(
    uint _fee,
    string memory _jobId,
    address _oracleId,
    address _link,
    KeeperRegistrarInterface _registrar,
    uint updateInterval
  ) ConfirmedOwner(msg.sender) {
    setChainlinkToken(_link);
    setChainlinkOracle(_oracleId);
    jobId = _jobId;
    i_registrar = _registrar;
    fee = (_fee * LINK_DIVISIBILITY) / 10; // 0,5 * 10**18 (Varies by network and job)
    interval = updateInterval;
    lastTimeStamp = block.timestamp;
    volumeOracle = IDinamikoVolumeOracle(volumeOracle);
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
      lastTimeStamp = block.timestamp;
    }
  }

  /**
   * @notice Allow withdraw of Link tokens from the contract
   */
  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }

  function pause() public onlyOwner {
    _pause();
  }
}
