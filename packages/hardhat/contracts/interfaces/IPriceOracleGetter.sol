// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;

/**
 * @title IDinamikoOracle
 * @author Dinamiko
 * @notice Interface for the Aave price oracle.
 * - Original contract was written by Aave that the link https://github.com/aave/aave-v3-core/blob/29ff9b9f89af7cd8255231bc5faf26c3ce0fb7ce/contracts/interfaces/IAaveOracle.sol
 */
interface IPriceOracleGetter {
  /**
   * @notice Returns the base currency address
   * @dev Address 0x0 is reserved for USD as base currency.
   * @return Returns the base currency address.
   */
  function BASE_CURRENCY() external view returns (address);

  /**
   * @notice Returns the base currency unit
   * @dev 1 ether for ETH, 1e8 for USD.
   * @return Returns the base currency unit.
   */
  function BASE_CURRENCY_UNIT() external view returns (uint256);

  /**
   * @notice Returns the asset price in the base currency
   * @param asset The address of the asset
   * @return The price of the asset
   */
  function getAssetPrice(address asset) external view returns (uint256);
}
