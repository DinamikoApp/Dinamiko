//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./base/interfaces/IPriceFeedBased.sol";
import "./base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../oracles/interfaces/IDinamikoPriceOracle.sol";
import "hardhat/console.sol";

contract PriceFeedBased is ChainlinkClient, ConfirmedOwner, Pausable, AutomationCompatibleInterface, IPriceFeedBased {
  using Chainlink for Chainlink.Request;

  int256 public LastInflationsRate = 0;
  address public oracleId;
  string public jobId;
  uint256 public fee;
  KeeperRegistrarInterface public immutable i_registrar;
  IDinamikoPriceOracle priceOracle;

  PriceFeedBasedSubscription[] public subscriptions;
  uint public immutable interval;
  uint public lastTimeStamp;

  address public baseCurrency;

  uint256 public subscriptionIds;

  constructor(
    address oracleAddress,
    uint _fee,
    string memory _jobId,
    address _oracleId,
    address _link,
    KeeperRegistrarInterface _registrar,
    uint updateInterval,
    address _baseCurrency
  ) ConfirmedOwner(msg.sender) {
    setChainlinkToken(_link);
    setChainlinkOracle(_oracleId);
    jobId = _jobId;
    i_registrar = _registrar;
    fee = (_fee * LINK_DIVISIBILITY) / 10; // 0,5 * 10**18 (Varies by network and job)

    interval = updateInterval;
    lastTimeStamp = block.timestamp;
    priceOracle = IDinamikoPriceOracle(oracleAddress);
    baseCurrency = _baseCurrency;
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

  function createSubscription(
    uint subscriptionType,
    uint amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint256 assetPriceChangePercent
  ) external override returns (uint256 subscriptionId) {
    require(subscriptionType < 3 && subscriptionType > 0, "Subscription Type does not exist ");
    subscriptionId = subscriptionIds++;
    uint256 currentPrice = priceOracle.getAssetPrice(token1);
    subscriptions[subscriptionId] = PriceFeedBasedSubscription(
      subscriptionType,
      amount,
      action,
      token1,
      token2,
      liquidityPool,
      currentPrice,
      assetPriceChangePercent
    );
    emit CreateSubscription(subscriptionType, amount, action, token1);
  }

  /**
   * @notice Allow withdraw of Link tokens from the contract
   */
  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }

  function pause() public override onlyOwner {
    _pause();
  }

  function executeSubscriptions() internal {
    for (uint i = 0; i < subscriptions.length; i++) {
      console.log(subscriptions[i].subscriptionType);
    }
  }

  function getSubscriptions() external view override returns (PriceFeedBasedSubscription[] memory) {
    return subscriptions;
  }

  function deleteSubscription(uint256 subscriptionId) external override onlyOwner returns (uint256 subId) {
    subscriptionId = subId;
    delete subscriptions[subId];
  }
}
