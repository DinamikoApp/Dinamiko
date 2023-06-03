// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

  function faucet(uint amount) public {
    _mint(_msgSender(), amount);
  }

  function faucet(address to, uint amount) public {
    _mint(to, amount);
  }
}

// enum SubscriptionActions {
//   BUY_ASSETS,
//   SELL_ASSETS,
//   ADD_LIQUIDITY
// }

// enum SubscriptionType {
//   TIME_BASED,
//   INFLATION_RATE,
//   ASSET_PRICE,
//   TRENDING_VOLUME
// }

// struct Subscription {
//   SubscriptionType subscriptionType;
//   uint amount;
//   SubscriptionActions action;
//   address token1;
//   address token2;
//   address liquidityPool;
//   mapping(string => uint) data;
// }
