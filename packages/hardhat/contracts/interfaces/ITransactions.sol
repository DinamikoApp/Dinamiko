/// @title Transactions
/// @author NatX
/// @notice Transactions contract interface
/// @dev Interface for transactions contract that performs transactions with Uniswap V3 integration
interface Transactions {
    function buyToken(address assetToken, uint amount, address receiver) external returns(uint);
    function sellToken(address assetToken, uint amount, address receiver) external returns(uint);
    function mintNewPosition(address token0, address token1, uint _amount0, uint _amount1, address receiver) external returns(uint256, uint128, uint256, uint256);
}