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
import "hardhat/console.sol";

contract InflationBased is ChainlinkClient, ConfirmedOwner, Pausable, AutomationCompatibleInterface, IInflationBased {
  using Chainlink for Chainlink.Request;

  uint256 public LastInflationsRate = 0;
  address public oracleId;
  string public jobId;
  uint256 public fee;
  KeeperRegistrarInterface public immutable i_registrar;

  InflationBaseSubscription[] public subscriptions;
  uint public immutable interval;
  uint public lastTimeStamp;
  address public baseCurrency;

  uint256 public subscriptionIds;

  constructor(
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
    baseCurrency = _baseCurrency;
  }

  /**
   *  @notice This functions gets the current inflation rate
   *  @dev The function needs to be fired first before the inflation rate can be updated (a few seconds have to pass first the inflation rate is set)
   */
  function requestInflationRate() public returns (bytes32 requestId) {
    Chainlink.Request memory req = buildChainlinkRequest(
      bytes32(bytes(jobId)),
      address(this),
      this.fulfillInflationRate.selector
    );
    req.add("service", "truflation/current");
    req.add("keypath", "yearOverYearInflation");
    req.add("abi", "int256");
    req.add("multiplier", "1000000000000000000");
    req.add("refundTo", Strings.toHexString(uint160(msg.sender), 20));

    return sendChainlinkRequestTo(oracleId, req, fee);
  }

  /**
   * @notice this function sets the inflation rate value
   * @dev This function is called inside the requestInflationWei function
   */
  function fulfillInflationRate(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    LastInflationsRate = uint256(toInt256(_inflation));
  }

  /**
   *  @notice converts bytes type to int256
   *  @param _bytes the bytes input to be converted
   *  @return value the converted int value to be returned
   */
  function toInt256(bytes memory _bytes) internal pure returns (int256 value) {
    assembly {
      value := mload(add(_bytes, 0x20))
    }
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
      requestInflationRate();
      executeSubscriptions();
      lastTimeStamp = block.timestamp;
    }
  }

  function createSubscription(
    uint subscriptionType,
    uint256 amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint256 inflationChangePercent
  ) external override returns (uint256 subscriptionId) {
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

  function getSubscriptions() external view override returns (InflationBaseSubscription[] memory) {
    return subscriptions;
  }

  function deleteSubscription(uint256 subscriptionId) external override onlyOwner returns (uint256 subId) {
    subscriptionId = subId;
    delete subscriptions[subId];
  }
}
