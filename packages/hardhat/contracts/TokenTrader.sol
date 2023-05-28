// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./PriceConsumerV3.sol";

contract TokenTrader is PriceConsumerV3 {
    IERC20 public token;
    address public owner;
    uint256 public initialPrice;
    uint256 public buyThreshold;
    uint256 public sellThreshold;

    constructor(address _priceFeed, address _token) PriceConsumerV3(_priceFeed) {
        token = IERC20(_token);
        owner = msg.sender;
        initialPrice = uint256(getLatestPrice());
        buyThreshold = (initialPrice * 99) / 100;
        sellThreshold = (initialPrice * 109) / 100;
    }

    function buy(uint256 amount) public payable {
        require(uint256(getLatestPrice()) <= buyThreshold, "Price is too high");
        uint256 totalPrice = (amount * buyThreshold) / 1e18;
        require(msg.value >= totalPrice, "Insufficient ETH sent");

        token.transferFrom(owner, msg.sender, amount);
        payable(owner).transfer(totalPrice);
    }

    function sell(uint256 amount) public {
        require(uint256(getLatestPrice()) >= sellThreshold, "Price is too low");
        uint256 totalPrice = (amount * sellThreshold) / 1e18;

        token.transferFrom(msg.sender, owner, amount);
        payable(msg.sender).transfer(totalPrice);
    }
    function balanceOf() public view returns (uint256) {
        return token.balanceOf(msg.sender);
    }

}
