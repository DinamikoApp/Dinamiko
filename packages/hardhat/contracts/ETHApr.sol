/// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title ETH APR feed contract
 * @notice A contract that returns the ETH APR 30 and 90 days
 */
contract ETHAprFeed {
  address[2] public ETHAprFeedAddresses = [
    0xceA6Aa74E6A86a7f85B571Ce1C34f1A60B77CD29, //30-Day ETH APR
    0x7422A64372f95F172962e2C0f371E0D9531DF276 //90-Day ETH APR
  ];

  //Returns the lates ETH APR value at the corrisponding timeframe
  function getETHApr(int timeframe) public view returns (int) {
    require(timeframe == 30 || timeframe == 90, "timeframe not allowed");

    AggregatorV3Interface ETHAPrFeed;

    if (timeframe == 30) {
      ETHAPrFeed = AggregatorV3Interface(ETHAprFeedAddresses[0]);
    } else if (timeframe == 90) {
      ETHAPrFeed = AggregatorV3Interface(ETHAprFeedAddresses[1]);
    }

    (, int ETHAprValue, , , ) = ETHAPrFeed.latestRoundData();
    return ETHAprValue;
  }
}
