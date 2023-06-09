// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ISubscriptionBase.sol";

/**
 * @title  IRatesBased
 * @author Dinamiko
 * @notice Inflation Base Subscription Interface for all subscription contracts
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */
interface IDataFeedBased is ISubscriptionBase {
  function createSubscription(
    uint subscriptionType,
    uint256 amount,
    uint action,
    address token1,
    address token2,
    address liquidityPool,
    uint256 feedChangePercent,
    bytes32 feedId
  ) external payable returns (uint256 subscriptionId);

  function getSubscriptions() external view returns (DataFeedBasedSubscription[] memory);

  function deleteSubscription(uint256 subscriptionId) external returns (uint256 subId);

  event CreateSubscription(
    uint indexed subscriptionType,
    uint256 indexed amount,
    uint indexed action,
    address token1,
    address token2,
    bytes32 feedId
  );

  event DeleteSubscription(uint256 indexed subscriptionId, uint indexed subscriptionType);

  struct DataFeedBasedSubscription {
    uint subscriptionType;
    uint256 amount;
    uint action;
    address token1;
    address token2;
    address liquidityPool;
    uint256 lastDataFeedValue;
    uint256 feedChangePercent;
  }
}
