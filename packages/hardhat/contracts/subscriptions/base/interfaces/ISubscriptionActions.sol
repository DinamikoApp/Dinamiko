// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

interface ISubscriptionAction {
  function buyAsset(address _purchaseToken, uint _amount, address _receiver) external returns (uint);

  function sellToken(address _sellToken, uint _amount, address _receiver) external returns (uint);
}
