// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title  ISubscriptionBase
 * @author Dinamiko
 * @notice Base Subscription Interface for all subscription contracts
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */
interface ISubscriptionBase {
  enum SubscriptionActionsType {
    BUY_ASSETS,
    SELL_ASSETS,
    ADD_LIQUIDITY
  }

  /**
   * @notice Pause all the operations of the contract.
   */
  function pause() external;
}
