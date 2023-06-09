// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ISubscriptionBase.sol";

/**
 * @title  ITimeBased
 * @author Dinamiko
 * @notice Inflation Base Subscription Interface for all subscription contracts
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */
interface ITradingVolumeBased is ISubscriptionBase {
  function createSubscription(
    uint subscriptionType,
    uint amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint volumePercentChange
  ) external payable returns (uint256 subscriptionId);

  function getSubscriptions() external view returns (TradingVolumeBasedSubscription[] memory);

  function deleteSubscription(uint256 subscriptionId) external returns (uint256 subId);

  event CreateSubscription(
    uint indexed subscriptionType,
    uint256 indexed amount,
    uint indexed action,
    address token1,
    address token2,
    address volumeOracle,
    int256 volumeParentageChange
  );

  event DeleteSubscription(uint256 indexed subscriptionId, uint indexed subscriptionType);

  struct TradingVolumeBasedSubscription {
    uint subscriptionType;
    uint amount;
    uint action;
    address token1;
    address token2;
    address liquidityPool;
    address volumeOracle;
    uint256 lastKnowVolume;
    int256 volumePercentChange;
  }
}
