// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ISubscriptionBase.sol";

/**
 * @title  ITimeBased
 * @author Dinamiko
 * @notice Inflation Base Subscription Interface for all subscription contracts
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */
interface ITimeBased is ISubscriptionBase {
  function createSubscription(
    uint subscriptionType,
    uint amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint256 interval,
    uint256 assetPricePercent
  ) external payable returns (uint256 subscriptionId);

  function getSubscriptions() external view returns (TimeBasedSubscription[] memory);

  function deleteSubscription(uint256 subscriptionId) external returns (uint256 subId);

  event CreateSubscription(
    uint indexed subscriptionType,
    uint256 indexed amount,
    uint indexed action,
    address token1,
    address token2,
    uint256 interval
  );

  event DeleteSubscription(uint256 indexed subscriptionId, uint indexed subscriptionType);

  struct TimeBasedSubscription {
    uint subscriptionType;
    uint256 amount;
    uint action;
    address token1;
    address token2;
    address liquidityPool;
    uint256 interval;
    uint256 lastAssetPrice;
    int256 assetPricePercent;
  }
}
