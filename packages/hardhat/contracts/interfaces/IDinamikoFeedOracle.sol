// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

/**
 * @title IDinamikoPriceOracle
 * @author Dinamiko
 * @notice Defines the basic interface for the Dinamiko Feed Oracle
 * - Original contract was written by Aave that the link https://github.com/aave/aave-v3-core/blob/29ff9b9f89af7cd8255231bc5faf26c3ce0fb7ce/contracts/interfaces/IAaveOracle.sol we altered it to map bytes32 ids to data feeds
 */
interface IDinamikoFeedOracle {
  /**
   * @dev Emitted after the price source of an asset is updated
   * @param id The id for find the data feed
   * @param source The price source of the asset
   */
  event DataFeedSourceUpdated(bytes32 indexed id, address indexed source);

  /**
   * @dev Emitted after the address of fallback oracle is updated
   * @param fallbackOracle The address of the fallback oracle
   */
  event FallbackOracleUpdated(address indexed fallbackOracle);

  /**
   * @notice Sets or replaces data sources of keys
   * @param ids The id for that data we want
   * @param sources The addresses of the data sources
   */
  function setDataFeedSources(bytes32[] calldata ids, address[] calldata sources) external;

  /**
   * @notice Sets the fallback oracle
   * @param fallbackOracle The address of the fallback oracle
   */
  function setFallbackOracle(address fallbackOracle) external;

  /**
   * @notice Returns a list of number from a list of bytes32 keys
   * @param ids The list of keys to a addresses of a DataFeed Aggregator
   * @return The data for the the list of ids given DataFeeds
   */
  function getFeedsData(bytes32[] calldata ids) external view returns (uint256[] memory);

  /**
   * @notice Returns the address of the source for an asset address
   * @param asset The address of the asset
   * @return The address of the source
   */
  function getSourceOfData(bytes32 asset) external view returns (address);

  /**
   * @notice Returns the address of the fallback oracle
   * @return The address of the fallback oracle
   */
  function getFallbackOracle() external view returns (address);

  /**
   * @notice Returns the prices of the given  assets addresses
   * @param id of the feed
   * @return data for feed mapped to that id
   */
  function getFeedData(bytes32 id) external view returns (uint256);
}
