/// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title Volatility feed contract
 * @notice A contract that returns the BTC-USD, ETH-USD, LINK-USD 24hr/7days/30h Realized Volatility
 */
contract VolatilityFeed {
  address[3] public volatilityFeedAddresses;

  //Define the realized volatility feed aggregator addresses for the assets - Sepolia network
  address[3] public volatilityFeedAddresses7Days = [
    0x88163626786Ee98AA1De65BD2A76599e71598FD9, //BTC-USD 7-days realized volatility
    0xF3140662cE17fDee0A6675F9a511aDbc4f394003, //ETH-USD 7-days realized volatility
    0x03121C1a9e6b88f56b27aF5cc065ee1FaF3CB4A9 //LINK-USD 7-days realized volatility
  ];

  address[3] public volatilityFeedAddresses24Hours = [
    0x28f9134a15cf0aAC9e1F0CD09E17f32925254C77, //BTC-USD 24Hours realized volatility
    0x31D04174D0e1643963b38d87f26b0675Bb7dC96e, //ETH-USD 24Hours realized volatility
    0xfD59B51F25E0Ab790a4F0c483BaC194FA0479D29 //LINK-USD 24Hours realized volatility
  ];

  address[3] public volatilityFeedAddresses30Hours = [
    0xabfe1e28F54Ac40776DfCf2dF0874D37254D5F59, //BTC-USD 30Hours realized volatility
    0x8e604308BD61d975bc6aE7903747785Db7dE97e2, //ETH-USD 30Hours realized volatility
    0xd599cEF88Bbd27F1392A544bD0F343ec8893124C //LINK-USD 30Hours realized volatility
  ];

  string[3] public assetNames = ["BTC-USD", "ETH-USD", "LINK-USD"];

  //Store the asset name and the volatility value
  struct AssetVolatility {
    string name;
    int value;
  }

  //Returns the lates volatility value of an assetet paased as parameter into the function
  function getLatestVolatility(address volatilityFeedAddress) private view returns (int) {
    AggregatorV3Interface volatilityFeed = AggregatorV3Interface(volatilityFeedAddress);
    (, int volatility, , , ) = volatilityFeed.latestRoundData();
    return volatility;
  }

  function timeFrame(uint time) public {
    require(time == 24 || time == 30 || time == 168, "timeframe not allowed");

    //Rolling window 24 hours
    if (time == 24) {
      for (uint i = 0; i < volatilityFeedAddresses.length; i++) {
        volatilityFeedAddresses[i] = volatilityFeedAddresses24Hours[i];
      }
    }
    //Rolling window 30 hours
    else if (time == 30) {
      for (uint i = 0; i < volatilityFeedAddresses.length; i++) {
        volatilityFeedAddresses[i] = volatilityFeedAddresses30Hours[i];
      }
    }
    //Rolling window 7 days = 168 hours
    else if (time == 168) {
      for (uint i = 0; i < volatilityFeedAddresses.length; i++) {
        volatilityFeedAddresses[i] = volatilityFeedAddresses7Days[i];
      }
    }

    getVolatilityValues();
  }

  //Returns the name and the corrisponding volatility values of each asset
  function getVolatilityValues() public view returns (AssetVolatility[3] memory) {
    AssetVolatility[3] memory volatilityValues;

    for (uint i = 0; i < volatilityFeedAddresses.length; i++) {
      volatilityValues[i] = AssetVolatility({
        name: assetNames[i],
        value: getLatestVolatility(volatilityFeedAddresses[i])
      });
    }

    return volatilityValues;
  }

  //Return the lowest volatility asset name
  function getLowRiskAsset() public view returns (string memory) {
    require(volatilityFeedAddresses.length > 0, "No volatility feed address provided");

    uint lowRiskAssetIndex = 0;
    int lowestVolatility = getLatestVolatility(volatilityFeedAddresses[0]);

    for (uint i = 1; i < volatilityFeedAddresses.length; i++) {
      int currentVolatility = getLatestVolatility(volatilityFeedAddresses[i]);
      if (currentVolatility < lowestVolatility) {
        lowRiskAssetIndex = 1;
        lowestVolatility = currentVolatility;
      }
    }

    //Return the name of the asset with the lowest realized volatility
    return assetNames[lowRiskAssetIndex];
  }
}
