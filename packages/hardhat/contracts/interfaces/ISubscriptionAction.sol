// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;

/**
 * @title ISubscriptionAction
 * @author Dinamiko
 * @notice Subscription Action Contract to  perform  sell a, buy and mint liquidity contract
 * - Use of Uniswap to BuyToken , SellToken , MintNewPosition
 */

interface ISubscriptionAction {
  /**
   * @notice Sets or replaces data sources of keys
   * @param asset  The address of the token you want to buy
   * @param amount The amount of tokens you want to buy
   * @param receiver the receiver address for tokens you want to buy
   */
  function buyToken(address asset, uint amount, address receiver) external returns (uint);

  /**
   * @notice Sets or replaces data sources of keys
   * @param asset The address of the token you want to sell
   * @param amount The amount of tokens you want to  sell
   * @param receiver the receiver address of token you want to sell
   */

  function sellToken(address asset, uint amount, address receiver) external returns (uint);
}
