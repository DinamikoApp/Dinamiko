// // SPDX-License-Identifier: MIT
// pragma solidity ^0.7.0;
// pragma abicoder v2;

// import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
// import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
// import '@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol';
// import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol';

// contract Transactions {

//     ISwapRouter public constant swapRouter = ISwapRouter(Router);

//     address deployer;

//     address public constant Router = 0xE592427A0AEce92De3Edee1F18E0157C05861564; // the router contract address
//     address public constant factoryAdd = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
//     //We will set the pool fee to 0.3%.
//     uint24 public constant poolFee = 3000;

//     uint256 nonce;

//     constructor () {
//         nonce = 1;
//     }

//     // the buyAsset function follows the swapexactinput example from uniswap documentation 
//     function buyAsset (
//         // the token the user is buying
//         address _assetToken,
//         // the amount the user intends to buy
//         uint _amount,
//         // the receivers address i.e the smart contract address
//         address _receiver
//         ) public returns(uint amountOut) {
           
//         TransferHelper.safeApprove(purchaseToken, address(swapRouter), _amount);

//         ISwapRouter.ExactInputSingleParams memory params =
//             ISwapRouter.ExactInputSingleParams({
//                 tokenIn: purchaseToken,
//                 tokenOut: _assetToken,
//                 fee: poolFee,
//                 recipient: _receiver,
//                 deadline: block.timestamp + 10,
//                 amountIn: _amount,
//                 amountOutMinimum: 0,
//                 sqrtPriceLimitX96: 0
//             });

//         // The call to `exactInputSingle` executes the swap and gets the amount paid to the receiver.
//         amountOut = swapRouter.exactInputSingle(params);
//         emit transaction(msg.sender, _receiver, amountOut, block.timestamp);       
//     }

//     function sellToken (
//         // the token the user is buying
//         address _assetToken,
//         // the amount the user intends to buy
//         uint _amount,
//         // the receivers address i.e the smart contract address
//         address _receiver
//         ) public returns(uint amountOut) {
           
//         TransferHelper.safeApprove(_assetToken, address(swapRouter), _amount);

//         ISwapRouter.ExactInputSingleParams memory params =
//             ISwapRouter.ExactInputSingleParams({
//                 tokenIn: _assetToken,
//                 tokenOut: purchaseToken,
//                 fee: poolFee,
//                 recipient: _receiver,
//                 deadline: block.timestamp + 10,
//                 amountIn: _amount,
//                 amountOutMinimum: 0,
//                 sqrtPriceLimitX96: 0
//             });

//         // The call to `exactInputSingle` executes the swap and gets the amount paid to the receiver.
//         amountOut = swapRouter.exactInputSingle(params);
//         emit transaction(msg.sender, _receiver, amountOut, block.timestamp);       
//     }
// }