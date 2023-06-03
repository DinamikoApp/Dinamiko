// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";

contract SubscriptionAction {
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
  function buyAsset(address _purchaseToken, uint _amount, address _receiver) public returns (uint) {
    return executeSwap(_purchaseToken, factoryAddress, _amount, _receiver);
  }

  // Function to sell token
  function sellToken(address _sellToken, uint _amount, address _receiver) public returns (uint) {
    return executeSwap(_sellToken, factoryAddress, _amount, _receiver);
  }
}
