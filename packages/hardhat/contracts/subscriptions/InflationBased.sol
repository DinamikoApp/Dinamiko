//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./base/interfaces/IInflationBased.sol";
import "./base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../oracles/interfaces/IDinamikoInflationOracle.sol";
import "./base/interfaces/ISubscriptionActions.sol";

contract InflationBased is ConfirmedOwner, Pausable, AutomationCompatibleInterface, IInflationBased {
  KeeperRegistrarInterface public immutable i_registrar;
  InflationBaseSubscription[] public subscriptions;
  uint public immutable interval;
  uint public lastTimeStamp;
  address public baseCurrency;
  IDinamikoInflationOracle public i_inflationOracle;
  uint256 public LastInflationsRate;
  ISubscriptionAction public subscriptionAction;

  uint256 public subscriptionIds;

  constructor(
    address _inflationOracle,
    KeeperRegistrarInterface _registrar,
    uint updateInterval,
    address _baseCurrency
  ) ConfirmedOwner(msg.sender) {
    interval = updateInterval;
    lastTimeStamp = block.timestamp;
    baseCurrency = _baseCurrency;
    i_inflationOracle = IDinamikoInflationOracle(_inflationOracle);
    i_registrar = KeeperRegistrarInterface(_registrar);
    LastInflationsRate = i_inflationOracle.getInflationRate();
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
      executeSubscriptions();
      lastTimeStamp = block.timestamp;
    }
  }

  function setSubScriptionAction(address subAction) public onlyOwner returns (address) {
    subscriptionAction = ISubscriptionAction(subAction);
  }

  function createSubscription(
    uint subscriptionType,
    uint256 amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint256 inflationChangePercent
  ) external override onlyOwner returns (uint256 subscriptionId) {
    require(subscriptionType < 3 && subscriptionType > 0, "Subscription Type does not exist ");
    subscriptionId = subscriptionIds++;
    subscriptions[subscriptionId] = InflationBaseSubscription(
      subscriptionType,
      amount,
      action,
      token1,
      token2,
      liquidityPool,
      LastInflationsRate,
      inflationChangePercent
    );
    emit CreateSubscription(subscriptionType, amount, action, token1, token2);
  }

  function pause() public override onlyOwner {
    _pause();
  }

  function executeSubscriptions() internal {
    for (uint i = 0; i < subscriptions.length; i++) {
      // console.log(subscriptions[i].subscriptionType);
    }
  }

  function getSubscriptions() external view override returns (InflationBaseSubscription[] memory) {
    return subscriptions;
  }

  function deleteSubscription(uint256 subscriptionId) external override onlyOwner returns (uint256 subId) {
    subscriptionId = subId;
    delete subscriptions[subId];
  }
}
