// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface IPriceFeedOracle {

    function getTokenPrice(address token) external view returns(int);

    /// @notice returns all the token prices
    /// @return allPrices
    function getAllPrices(address[] calldata tokens) external view returns(int[] memory allPrices);

    function setTokenSources(address[] calldata tokens) external;
}