// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IDinamikoFeedOracle} from "../interfaces/IDinamikoFeedOracle.sol";
import "../interfaces/IPriceOracleGetter.sol";

/**
 * @title  DinamikoFeedOracle Feed oracle
 * @author Dinamiko
 * @notice Contract to get asset prices, manage price sources and update the fallback oracle
 * - Use of Chainlink Aggregators as first source of price
 * - If the returned price by a Chainlink aggregator is <= 0, the call is forwarded to a fallback oracle
 * - Original contract was written by Aave that the link  https://github.com/aave/aave-v3-core/blob/29ff9b9f89af7cd8255231bc5faf26c3ce0fb7ce/contracts/misc/AaveOracle.sol
 **/

contract DinamikoFeedOracle is IDinamikoFeedOracle, Ownable {
  // Map of datafeed key or id  sources (key => priceSource)
  mapping(bytes32 => AggregatorV3Interface) private dataSources;
  IDinamikoFeedOracle private _fallbackOracle;

  /**
   * @notice Constructor
   * @param ids The bytes32  has of the  Data Feed
   * @param sources The address of the source of each  data result
   * @param fallbackOracle The address of the fallback oracle to use if the data of an
   *        aggregator is not consistent
   */

  constructor(bytes32[] memory ids, address[] memory sources, address fallbackOracle) {
    _setFallbackOracle(fallbackOracle);
    _setDataFeedSources(ids, sources);
  }

  /// @inheritdoc IDinamikoFeedOracle
  function setDataFeedSources(bytes32[] calldata ids, address[] calldata sources) external override onlyOwner {
    _setDataFeedSources(ids, sources);
  }

  /// @inheritdoc IDinamikoFeedOracle
  function setFallbackOracle(address fallbackOracle) external override onlyOwner {
    _setFallbackOracle(fallbackOracle);
  }

  /**
   * @notice Internal function to set the sources for each asset
   * @param ids The list id of the Feed
   * @param sources The address of the source of each asset
   */
  function _setDataFeedSources(bytes32[] memory ids, address[] memory sources) internal {
    require(ids.length == sources.length, "Inconsistent parameters length");
    for (uint256 i = 0; i < ids.length; i++) {
      dataSources[ids[i]] = AggregatorV3Interface(sources[i]);
      emit DataFeedSourceUpdated(ids[i], sources[i]);
    }
  }

  /**
   * @notice Internal function to set the fallback oracle
   * @param fallbackOracle The address of the fallback oracle
   */
  function _setFallbackOracle(address fallbackOracle) internal {
    _fallbackOracle = IDinamikoFeedOracle(fallbackOracle);
    emit FallbackOracleUpdated(fallbackOracle);
  }

  /// @inheritdoc IDinamikoFeedOracle
  function getFeedData(bytes32 id) public view override returns (uint256) {
    AggregatorV3Interface source = dataSources[id];

    if (address(source) == address(0)) {
      return 0;
    } else {
      (, int256 result, , , ) = source.latestRoundData();
      if (result > 0) {
        return uint256(result);
      } else {
        return _fallbackOracle.getFeedData(id);
      }
    }
  }

  /// @inheritdoc IDinamikoFeedOracle
  function getFeedsData(bytes32[] calldata ids) external view override returns (uint256[] memory) {
    uint256[] memory feedsData = new uint256[](ids.length);
    for (uint256 i = 0; i < ids.length; i++) {
      feedsData[i] = getFeedData(ids[i]);
    }
    return feedsData;
  }

  /// @inheritdoc IDinamikoFeedOracle
  function getSourceOfData(bytes32 id) external view override returns (address) {
    return address(dataSources[id]);
  }

  /// @inheritdoc  IDinamikoFeedOracle
  function getFallbackOracle() external view override returns (address) {
    return address(_fallbackOracle);
  }
}
