// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/// @title price feed oracle
/// @author NatX
/// @notice Price oracle contract for dinamiko project
/// @dev mapping of token to their aggregator price feed sources
/// also contains functions that return all token prices
contract PriceFeedOracle {

    /// @dev mapping of tokens to their sources
    mapping (address => AggregatorV3Interface) private priceSources;

    /// @notice Constructor function
    /// @dev Sets the price sources for the tokens
    /// @param BTCPriceAddress BTC aggregator address
    /// @param ETHPriceAddress ETH aggregator address
    /// @param LINKPriceAddress LINK aggregator address
    /// @param MATICPriceAddress MATIC aggregator address
    constructor(address BTCPriceAddress, address ETHPriceAddress, address LINKPriceAddress, address MATICPriceAddress) {
        
        priceSources[BTCPriceAddress] = AggregatorV3Interface(BTCPriceAddress);
        priceSources[ETHPriceAddress] = AggregatorV3Interface(ETHPriceAddress);
        priceSources[LINKPriceAddress] = AggregatorV3Interface(LINKPriceAddress);
        priceSources[MATICPriceAddress] = AggregatorV3Interface(MATICPriceAddress);

    }

    /// @notice function to get token price
    /// @dev Takes in a token and returns the correspending price
    /// @param token The token
    /// @return int
    function getTokenPrice(address token) public view  returns(int) {
        AggregatorV3Interface priceFeed = priceSources[token];
        (
             ,
            int price, , , 
        ) = priceFeed.latestRoundData();

        return price;
    }

    /// @notice returns all the token prices
    /// @return allPrices
    function getAllPrices(address[] calldata tokens) public view returns(int[] memory allPrices) {
        for (uint i = 0; i < tokens.length; i++) {
            allPrices[i] = getTokenPrice(tokens[i]);
        }
    }

    function setTokenSources(address[] calldata tokens) public {
        for (uint i = 0; i < tokens.length; i++) {
            priceSources[tokens[i]] = AggregatorV3Interface(tokens[i]);
        }
    }
}