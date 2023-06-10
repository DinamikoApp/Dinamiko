// SPDX-License-Identifier: MIT

pragma solidity 0.8.6;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";
import "./base/interfaces/ISubscriptionActions.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";

contract SubscriptionAction is ISubscriptionAction {
  // Immutable variable for the Uniswap Swap Router
  ISwapRouter internal immutable swapRouter;

  // Factory address for the Uniswap V3 Core contract
  address public factoryAddress;

  // Pool fee set to 0.3%
  uint24 public constant POOL_FEE = 3000;

  // Events declaration
  event Transaction(address indexed from, address indexed to, uint amountOut, uint timestamp);

  constructor(address _routerAddress, address _factoryAddress) {
    // Initialize the swapRouter with the Uniswap Router address
    swapRouter = ISwapRouter(_routerAddress);
    factoryAddress = _factoryAddress;
  }

  function _swap(address tokenIn, address tokenOut, uint amount, address receiver) private returns (uint amountOut) {
    TransferHelper.safeApprove(tokenIn, address(swapRouter), amount);

    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      fee: POOL_FEE,
      recipient: receiver,
      deadline: block.timestamp + 10, // 10 second deadline
      amountIn: amount,
      amountOutMinimum: 0,
      sqrtPriceLimitX96: 0
    });

    amountOut = swapRouter.exactInputSingle(params);

    emit Transaction(msg.sender, receiver, amountOut, block.timestamp);

    return amountOut;
  }

  // Function to buy asset
  function buyAsset(address _purchaseToken, uint _amount, address _receiver) external override returns (uint) {
    return _swap(_purchaseToken, factoryAddress, _amount, _receiver);
  }

  // Function to sell token
  function sellToken(address _sellToken, uint _amount, address _receiver) external override returns (uint) {
    return _swap(_sellToken, factoryAddress, _amount, _receiver);
  }

  function addLiquidity(
    address token0,
    address token1,
    uint24 fee,
    int24 tickLower,
    int24 tickUpper,
    uint256 amount0Desired,
    uint256 amount1Desired,
    uint256 amount0Min,
    uint256 amount1Min,
    address recipient,
    uint256 deadline
  ) external {
    // Need to approve the position manager to spend tokens here
    // ERC20(token0).approve(address(positionManager), amount0Desired);
    // ERC20(token1).approve(address(positionManager), amount1Desired);

    positionManager.mint(
      INonfungiblePositionManager.MintParams({
        token0: token0,
        token1: token1,
        fee: fee,
        tickLower: tickLower,
        tickUpper: tickUpper,
        amount0Desired: amount0Desired,
        amount1Desired: amount1Desired,
        amount0Min: amount0Min,
        amount1Min: amount1Min,
        recipient: recipient,
        deadline: deadline
      })
    );
  }
}
