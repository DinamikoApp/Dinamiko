// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
// import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
// import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
// import "@openzeppelin/contracts/security/Pausable.sol";

// struct RegistrationParams {
//     string name;
//     bytes encryptedEmail;
//     address upkeepContract;
//     uint32 gasLimit;
//     address adminAddress;
//     bytes checkData;
//     bytes offchainConfig;
//     uint96 amount;
// }

// interface Transactions {
//     function buyToken(address assetToken, uint amount, address receiver) external returns(uint);
//     function sellToken(address assetToken, uint amount, address receiver) external returns(uint);
//     function mintNewPosition(address token0, address token1, uint _amount0, uint _amount1, address receiver) external returns(uint256, uint128, uint256, uint256);
// }

// interface IERC20 {
//     function transfer(address recipient, uint256 amount) external returns (bool);
//     function approve(address spender, uint256 amount) external returns (bool);
//     function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
// }

// interface KeeperRegistrarInterface {
//     function registerUpkeep(
//         RegistrationParams calldata requestParams
//     ) external returns (uint256);
// }

// contract TimeBasedSubscriptions is ConfirmedOwner, Pausable, AutomationCompatibleInterface {

//     struct Subscription {
//         address owner;
//         uint transactionInterval;
//         uint lastTimeStampTX;
//         uint32 transactionType;
//         address tokenIn;
//         address tokenOut;
//         uint256 amountIn;
//         uint256 amountOut;
//         bool active;
//     }

//     uint subCounter;

//     mapping (uint256 => Subscription) subscriptions;
//     mapping (address => Subscription[]) public userSubscriptions;

//     address public constant usdtAddress = 0x1F98431c8aD98523631AE4a59f267346ea31F984; // (look for usdt on mumbai)

//     LinkTokenInterface public immutable i_link;
//     KeeperRegistrarInterface public immutable i_registrar;

//     uint public immutable interval;
//     uint public lastTimeStamp;

//     Transactions transactions;

//     address transactionsAdd;

//     constructor(LinkTokenInterface link, KeeperRegistrarInterface registrar, uint updateInterval, address transactionsAddress) ConfirmedOwner(msg.sender) {
//         i_link = link;
//         i_registrar = registrar;

//         interval = updateInterval;
//         lastTimeStamp = block.timestamp;

//         subCounter = 0;

//         transactionsAdd = transactionsAddress;

//         transactions = Transactions(transactionsAddress);
//     }

//         function checkUpkeep(
//         bytes calldata checkData
//     )
//         external
//         view
//         override
//         whenNotPaused
//         returns (bool upkeepNeeded, bytes memory performData)
//     {
//         upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;

//         performData = checkData;
//     }

//     function performUpkeep(bytes calldata /* performData */) external override whenNotPaused {
//         if ((block.timestamp - lastTimeStamp) > interval) {
//             // perform swap/transaction here
//             executeSubscriptions();
//         }
//     }

//     function registerAndPredictID(bytes calldata offchainConfig, bytes calldata checkData, bytes calldata encryptedEmail) public returns(uint256 upkeepID) {
//         // LINK must be approved for transfer - this can be done every time or once
//         // with an infinite approval
//         RegistrationParams memory params = RegistrationParams("new Upkeep", encryptedEmail, address(this), 100000, 0x242dEb52CD278e2a724D4e597c5cCA028f3F9989, checkData, offchainConfig, 500000000000000000);

//         i_link.approve(address(i_registrar), params.amount);
//         upkeepID = i_registrar.registerUpkeep(params);
//         if (upkeepID != 0) {
//             return upkeepID;
//         } else {
//             revert("auto-approve disabled");
//         }
//     }


//     function pause() public onlyOwner {
//         _pause();
//     }

// // functions

// // create Subscription
// // user inputs conditions to the smart contract
// // conditions and swap params are stored in a struct / mapping
// function createBuySubscription(uint _interval, address tokenOut, uint amount) public {
//     Subscription memory newSub = Subscription(msg.sender, _interval, block.timestamp, 1, usdtAddress, tokenOut, amount, 0, true);
//     subscriptions[subCounter] = newSub;
//     userSubscriptions[msg.sender].push(newSub);
//     subCounter = subCounter + 1;
//     // approve the contract to spend the given amount of tokens specified on the frontend
// }

// function createSellSubscription(uint _interval, address tokenIn, uint amount) public {
//     Subscription memory newSub = Subscription(msg.sender, _interval, block.timestamp, 2, tokenIn, usdtAddress, amount, 0, true);
//     subscriptions[subCounter] = newSub;
//     userSubscriptions[msg.sender].push(newSub);
//     subCounter = subCounter + 1;
//     // approve the contract to spend the given amount of tokens specified on the frontend
// }

// function createAddLiqSubscription(uint _interval, address token0, address token1, uint amount0, uint amount1) public {
//     Subscription memory newSub = Subscription(msg.sender, _interval, block.timestamp, 3, token0, token1, amount0, amount1, true);
//     subscriptions[subCounter] = newSub;
//     userSubscriptions[msg.sender].push(newSub);
//     subCounter = subCounter + 1;
//     // approve the contract to spend the given amount of tokens specified on the frontend
//     // for both tokens
// }

// /// function needs to be ran in a loop on the frontend
// function getTransactions(address user) public view returns(Subscription[] memory) {
//     return userSubscriptions[user];
// }

// function deleteSubscription(uint i) public {
//     require(subscriptions[i].owner == msg.sender);
//     subscriptions[i].active = false;
// }

// // execute transactions
// // checks if the conditions are met and fires the function
// function executeSubscriptions() public {
//     uint _subCounter = subCounter + 1;
//     for (uint i = 0; i < _subCounter; i++) {
//         uint transactionInterval = subscriptions[i].transactionInterval;
//         uint lastTimeStampTX = subscriptions[i].lastTimeStampTX;
//         uint32 transactionType = subscriptions[i].transactionType;
//         bool status = subscriptions[i].active;
//         if ((block.timestamp - lastTimeStampTX) > transactionInterval && transactionType == 1 && status == true) {
//             address owner_ = subscriptions[i].owner;
//             address token = subscriptions[i].tokenOut;
//             uint256 amount = subscriptions[i].amountIn;
//             subscriptions[i].lastTimeStampTX = block.timestamp;
//             // transfer from the user to the smarrt contract
//             IERC20 _token = IERC20(token);
//             _token.transferFrom(owner_, transactionsAdd, amount);
//             transactions.buyToken(token, amount, owner_);
//         }
//         else if ((block.timestamp - lastTimeStampTX) > transactionInterval && transactionType == 2 && status == true) {
//             address owner_ = subscriptions[i].owner;
//             address token = subscriptions[i].tokenIn;
//             uint256 amount = subscriptions[i].amountIn;
//             subscriptions[i].lastTimeStampTX = block.timestamp;
//             // transfer from the user to the smarrt contract
//             IERC20 _token = IERC20(token);
//             _token.transferFrom(owner_, transactionsAdd, amount);
//             transactions.sellToken(token, amount, owner_);
//         }
//         else if ((block.timestamp - lastTimeStampTX) > transactionInterval && transactionType == 3 && status == true) {
//             address owner_ = subscriptions[i].owner;
//             address token0 = subscriptions[i].tokenIn;
//             uint256 amount0 = subscriptions[i].amountIn;
//             address token1 = subscriptions[i].tokenOut;
//             uint256 amount1 = subscriptions[i].amountOut;

//             subscriptions[i].lastTimeStampTX = block.timestamp;

//             IERC20 _token0 = IERC20(token0);
//             _token0.transferFrom(owner_, transactionsAdd, amount0);

//             IERC20 _token1 = IERC20(token0);
//             _token1.transferFrom(owner_, transactionsAdd, amount1);

//             transactions.mintNewPosition(token0, token1, amount0, amount1, owner_);
//         }
//     }

// }
// }

