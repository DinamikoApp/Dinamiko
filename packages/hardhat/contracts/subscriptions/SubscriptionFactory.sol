//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DataFeedBased.sol";
import "./InflationBased.sol";
import "./PriceFeedBased.sol";
import "./TradingVolumeBased.sol";
import "./TimeBased.sol";
import "./base/interfaces/IKeeperRegistrarInterface.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract SubscriptionFactory is ConfirmedOwner {
  mapping(address => address) public dataFeeds_owners;
  mapping(address => address) public inflationBased_owners;
  mapping(address => address) public priceBased_owners;
  mapping(address => address) public timeBased_owners;
  mapping(address => address) public tradingVolume_owners;

  address public immutable _baseCurrency;
  uint public immutable _baseInterval;
  KeeperRegistrarInterface private immutable _baseRegistrar;
  address public immutable _basePriceOracle;
  address public immutable _baseFeedOracle;
  address public immutable _baseInflationOracle;

  constructor(
    address priceOracleAddress,
    address feedOracleAddress,
    address inflationOracleAddress,
    KeeperRegistrarInterface _registrar,
    uint baseInterval,
    address baseToken
  ) ConfirmedOwner(msg.sender) {
    _baseRegistrar = KeeperRegistrarInterface(_registrar);
    _baseInterval = baseInterval;
    _basePriceOracle = priceOracleAddress;
    _baseFeedOracle = feedOracleAddress;
    _baseInflationOracle = inflationOracleAddress;
    _baseCurrency = baseToken;
  }

  function createDataFeedBasedContract() public returns (address) {
    DataFeedBased newDataFeedBased = new DataFeedBased(
      address(_baseFeedOracle),
      _baseRegistrar,
      _baseInterval,
      _baseCurrency
    );
    dataFeeds_owners[msg.sender] = address(newDataFeedBased);
    return address(newDataFeedBased);
  }

  function createInflationBasedContract() public returns (address) {
    InflationBased newInflationBased = new InflationBased(
      address(_baseInflationOracle),
      _baseRegistrar,
      _baseInterval,
      _baseCurrency
    );
    inflationBased_owners[msg.sender] = address(newInflationBased);
    return address(newInflationBased);
  }

  function createTimeBaseContract() public returns (address) {
    TimeBase newTimeBase = new TimeBase(address(_basePriceOracle), _baseRegistrar, _baseInterval, _baseCurrency);
    timeBased_owners[msg.sender] = address(newTimeBase);
    return address(newTimeBase);
  }

  function createTradingVolumeBased() public returns (address) {
    TradingVolumeBased newTradingVolumeBased = new TradingVolumeBased(_baseRegistrar, _baseInterval, _baseCurrency);
    tradingVolume_owners[msg.sender] = address(newTradingVolumeBased);
    return address(newTradingVolumeBased);
  }
}
