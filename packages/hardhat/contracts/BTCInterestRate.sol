/// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title BTC Interest Rate Curve feed contract
 * @notice A contract that returns the BTC Interest Rate Curve 1 day/7days/14days
 */
contract BTCInterestRate {
  address[3] public BTCInterestCurveFeedAddresses = [
    0x7DE89d879f581d0D56c5A7192BC9bDe3b7a9518e, //BTC Interest Rate Curve 1 day
    0x2583E47DF3F959B055F4Efa90C4927658669F499, //BTC Interest Rate Curve 1 week = 7 days
    0x39545d0c11CD62d787bB971B6a802150e1f54D8f //BTC Interest Rate Curve 2 weeks = 14 days
  ];

  //Returns the lates BTC Interest Curve Rate value at the corrisponding timeframe
  function getBTCInterestCurve(int timeframe) public view returns (int) {
    require(timeframe == 1 || timeframe == 7 || timeframe == 14, "timeframe not allowed");

    AggregatorV3Interface BTCInterestCurveFeed;

    if (timeframe == 1) {
      BTCInterestCurveFeed = AggregatorV3Interface(BTCInterestCurveFeedAddresses[0]);
    } else if (timeframe == 7) {
      BTCInterestCurveFeed = AggregatorV3Interface(BTCInterestCurveFeedAddresses[1]);
    } else if (timeframe == 14) {
      BTCInterestCurveFeed = AggregatorV3Interface(BTCInterestCurveFeedAddresses[2]);
    }

    (, int BTCInterestRateCurve, , , ) = BTCInterestCurveFeed.latestRoundData();
    return BTCInterestRateCurve;
  }
}
