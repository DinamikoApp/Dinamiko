// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ISubscriptionBase.sol";

/**
 * @title  IInflationBased
 * @author Dinamiko
 * @notice Inflation Base Subscription Interface for all subscription contracts
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */
interface IInflationBased is ISubscriptionBase {
  function createSubscription(
    uint subscriptionType,
    uint256 amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    int256 inflationChangePercent
  ) external returns (uint256 subscriptionId);

  function getSubscriptions() external view returns (InflationBaseSubscription[] memory);

  function deleteSubscription(uint256 subscriptionId) external returns (uint256 subId);

  event CreateSubscription(
    uint indexed subscriptionType,
    uint256 indexed amount,
    uint indexed action,
    address token1,
    address token2
  );

  event DeleteSubscription(uint256 indexed subscriptionId, uint indexed subscriptionType);

  struct InflationBaseSubscription {
    uint subscriptionType;
    uint amount;
    uint action;
    address token1;
    address token2;
    address liquidityPool;
    int256 lastInflationRate;
    int256 inflationChangePercent;
  }
}
