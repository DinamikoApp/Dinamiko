// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title The PriceConsumerV3 contract
 * @notice A contract that returns latest price from Chainlink Price Feeds
 */
contract PriceConsumerV3 {
  AggregatorV3Interface internal immutable priceFeedEthUsd;
  AggregatorV3Interface internal immutable priceFeedBtcUsd;
  AggregatorV3Interface internal immutable priceFeedDAIUsd;

  /**
   * @notice Executes once when a contract is created to initialize state variables
   *
   * @param _priceFeedEthUsd - Price Feed Address
   * Network: Sepolia Chain
   * Aggregator: ETH/USD
   * Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
   *
   * @param _priceFeedBtcUsd - Price Feed Address
   * Network: Sepolia Chain
   * Aggregator: BTC/USD
   * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
   *
   * @param _priceFeedDAIUsd - Price Feed Address
   * Network: Sepolia Chain
   * Aggregator: DAI/USD
   * Address: 0x14866185B1962B63C3Ea9E03Bc1da838bab34C19
   */
  constructor(address _priceFeedEthUsd, address _priceFeedBtcUsd, address _priceFeedDAIUsd) {
    priceFeedEthUsd = AggregatorV3Interface(_priceFeedEthUsd);
    priceFeedBtcUsd = AggregatorV3Interface(_priceFeedBtcUsd);
    priceFeedDAIUsd = AggregatorV3Interface(_priceFeedDAIUsd);
  }

  /**
   * @notice Returns the latest price
   *
   * @return latest price
   */
  function getLatestPrice(uint feedIndex) public view returns (int256) {
    int256 price;
    uint80 roundID;
    uint256 startedAt;
    uint256 timeStamp;
    uint80 answeredInRound;

    if (feedIndex == 0) {
      // Fetch the latest price for ETH/USD
      (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedEthUsd.latestRoundData();
    } else if (feedIndex == 1) {
      // Fetch the latest price for BTC/USD
      (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedBtcUsd.latestRoundData();
    } else if (feedIndex == 2) {
      // Fetch the latest price for DAI/USD
      (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedDAIUsd.latestRoundData();
    } else {
      revert("Invalid feed index");
    }

    require(timeStamp > 0, "Round not complete");
    return price;
  }

  /**
   * @notice Returns the Price Feed address
   *
   * @return Price Feed address
   */
  function getPriceFeed() public view returns (AggregatorV3Interface, AggregatorV3Interface, AggregatorV3Interface) {
    return (priceFeedEthUsd, priceFeedBtcUsd, priceFeedDAIUsd);
  }
}
