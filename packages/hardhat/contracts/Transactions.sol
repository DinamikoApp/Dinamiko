// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

// Import Uniswap's Oracle Library
import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";

// Import Uniswap's V3 Factory Interface
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";

contract Transactions {
  // Immutable variable for the Uniswap Swap Router
  ISwapRouter internal immutable swapRouter;

  // Factory address for the Uniswap V3 Core contract
  address public constant factoryAddress = 0x1F98431c8aD98523631AE4a59f267346ea31F984;

  // Pool fee set to 0.3%
  uint24 public constant POOL_FEE = 3000;

  // Events declaration
  event Transaction(address indexed from, address indexed to, uint amountOut, uint timestamp);

  constructor(address _routerAddress) {
    // Initialize the swapRouter with the Uniswap Router address
    swapRouter = ISwapRouter(_routerAddress);
  }

  function executeSwap(
    address tokenIn,
    address tokenOut,
    uint amount,
    address receiver
  ) private returns (uint amountOut) {
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
  function buyAsset(address purchaseToken, uint amount, address receiver) public returns (uint) {
    return executeSwap(purchaseToken, factoryAddress, amount, receiver);
  }

  // Function to sell token
  function sellToken(address sellToken, uint amount, address receiver) public returns (uint) {
    return executeSwap(sellToken, factoryAddress, amount, receiver);
  }
}
