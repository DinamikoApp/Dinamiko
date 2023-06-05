// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IDinamikoPriceOracle} from "../interfaces/IDinamikoPriceOracle.sol";
import "../interfaces/IPriceOracleGetter.sol";

/**
 * @title  DinamikoPriceOracle feed oracle
 * @author Dinamiko
 * @notice Contract to get asset prices, manage price sources and update the fallback oracle
 * - Use of Chainlink Aggregators as first source of price
 * - If the returned price by a Chainlink aggregator is <= 0, the call is forwarded to a fallback oracle
 * - Original contract was written by Aave that the link  https://github.com/aave/aave-v3-core/blob/29ff9b9f89af7cd8255231bc5faf26c3ce0fb7ce/contracts/misc/AaveOracle.sol
 **/

contract DinamikoPriceOracle is IDinamikoPriceOracle, Ownable {
  // Map of asset price sources (asset => priceSource)
  mapping(address => AggregatorV3Interface) private assetsSources;
  IPriceOracleGetter private _fallbackOracle;
  address public immutable BASE_CURRENCY;
  uint256 public immutable BASE_CURRENCY_UNIT;

  /**
   * @notice Constructor
   * @param assets The addresses of the assets
   * @param sources The address of the source of each asset
   * @param fallbackOracle The address of the fallback oracle to use if the data of an
   *        aggregator is not consistent
   * @param baseCurrency The base currency used for the price quotes. If USD is used, base currency is 0x0
   * @param baseCurrencyUnit The unit of the base currency
   */

  constructor(
    address[] memory assets,
    address[] memory sources,
    address fallbackOracle,
    address baseCurrency,
    uint256 baseCurrencyUnit
  ) {
    _setFallbackOracle(fallbackOracle);
    _setAssetsSources(assets, sources);
    BASE_CURRENCY = baseCurrency;
    BASE_CURRENCY_UNIT = baseCurrencyUnit;
    emit BaseCurrencySet(baseCurrency, baseCurrencyUnit);
  }

  /// @notice function to get token price
  /// @dev Takes in a token and returns the correspending price
  /// @param token The token
  /// @return int

  /// @inheritdoc IDinamikoPriceOracle
  function setAssetSources(address[] calldata assets, address[] calldata sources) external override onlyOwner {
    _setAssetsSources(assets, sources);
  }

  /// @inheritdoc IDinamikoPriceOracle
  function setFallbackOracle(address fallbackOracle) external override onlyOwner {
    _setFallbackOracle(fallbackOracle);
  }

  /**
   * @notice Internal function to set the sources for each asset
   * @param assets The addresses of the assets
   * @param sources The address of the source of each asset
   */
  function _setAssetsSources(address[] memory assets, address[] memory sources) internal {
    require(assets.length == sources.length, "Inconsistent parameters length");
    for (uint256 i = 0; i < assets.length; i++) {
      assetsSources[assets[i]] = AggregatorV3Interface(sources[i]);
      emit AssetSourceUpdated(assets[i], sources[i]);
    }
  }

  /**
   * @notice Internal function to set the fallback oracle
   * @param fallbackOracle The address of the fallback oracle
   */
  function _setFallbackOracle(address fallbackOracle) internal {
    _fallbackOracle = IPriceOracleGetter(fallbackOracle);
    emit FallbackOracleUpdated(fallbackOracle);
  }

  /// @inheritdoc IDinamikoPriceOracle
  function getAssetPrice(address asset) public view override returns (uint256) {
    AggregatorV3Interface source = assetsSources[asset];

    if (asset == BASE_CURRENCY) {
      return BASE_CURRENCY_UNIT;
    } else if (address(source) == address(0)) {
      return _fallbackOracle.getAssetPrice(asset);
    } else {
      (, int256 price, , , ) = source.latestRoundData();
      if (price > 0) {
        return uint256(price);
      } else {
        return _fallbackOracle.getAssetPrice(asset);
      }
    }
  }

  /// @inheritdoc IDinamikoPriceOracle
  function getAssetsPrices(address[] calldata assets) external view override returns (uint256[] memory) {
    uint256[] memory prices = new uint256[](assets.length);
    for (uint256 i = 0; i < assets.length; i++) {
      prices[i] = getAssetPrice(assets[i]);
    }
    return prices;
  }

  /// @inheritdoc IDinamikoPriceOracle
  function getSourceOfAsset(address asset) external view override returns (address) {
    return address(assetsSources[asset]);
  }

  /// @inheritdoc  IDinamikoPriceOracle
  function getFallbackOracle() external view override returns (address) {
    return address(_fallbackOracle);
  }
}
