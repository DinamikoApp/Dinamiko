// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// /// importing necessary contracts
// import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
// import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
// import "@openzeppelin/contracts/security/Pausable.sol";

// /// struct for registration of contract with chainlink
// /// might have to move it off-chain and register contract manually
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

// /// interface for the transactions contract
// interface Transactions {
//     /// function to buy tokens
//     function buyToken(address assetToken, uint amount, address receiver) external returns(uint);
//     /// function to sell contracts
//     function sellToken(address assetToken, uint amount, address receiver) external returns(uint);
// }

// ///  ERC20 token interface
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

// contract priceBasedSubscriptions is ConfirmedOwner, Pausable, AutomationCompatibleInterface  {

//     LinkTokenInterface public immutable i_link;
//     KeeperRegistrarInterface public immutable i_registrar;

//     /// subscription struct
//     struct Subscription {
//         address owner;
//         uint32 transactionType;
//         address tokenIn;
//         address tokenOut;
//         uint256 amountIn;
//         uint256 amountOut;
//         int priceTarget;
//         address aggregatorAddress; // the aggregator for the pair chosen, preferably token/usdt
//         bool active;
//     }

//     uint subCounter;

//     mapping (uint256 => Subscription) subscriptions;
//     mapping (address => Subscription[]) public userSubscriptions;

//     address public constant usdtAddress = 0x1F98431c8aD98523631AE4a59f267346ea31F984; // (look for usdt on mumbai)

//     /**
//      * Use an interval in seconds and a timestamp to slow execution of Upkeep
//      */
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

//         transactions = Transactions(transactionsAddress);
//         transactionsAdd = transactionsAddress;
//     }

//     function checkUpkeep(
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

//     function performUpkeep(bytes calldata /* performData */) external override {
//             if ((block.timestamp - lastTimeStamp) > interval) {
//             // perform swap/transaction here
//             executeSubscriptions();
//             lastTimeStamp = block.timestamp;
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

//     /**
//      * Returns the latest price.
//      * takes the aggregator address as input
//      */
//     function getLatestPrice(address aggregatorAddress) public view returns (int) {
//         AggregatorV3Interface priceFeed = AggregatorV3Interface(aggregatorAddress);

//         (
//             /* uint80 roundID */,
//             int price,
//             /*uint startedAt*/,
//             /*uint timeStamp*/,
//             /*uint80 answeredInRound*/
//         ) = priceFeed.latestRoundData();

//         return price;
//     }

// // create Subscription
// // user inputs conditions to the smart contract
// // conditions and swap params are stored in a mapping
// // aggregator address is gotten from the frontend based on the token selected
// function createBuySubscription(int priceTarget, address tokenOut, uint amount, address aggregatorAddress) public {
//     Subscription memory newSub = Subscription(msg.sender, 1, usdtAddress, tokenOut, amount, 0, priceTarget, aggregatorAddress, true);
//     subscriptions[subCounter] = newSub;
//     userSubscriptions[msg.sender].push(newSub);
//     // approve the contract to spend the given amount of tokens specified on the frontend
//     subCounter = subCounter + 1;
// }

// // user inputs conditions to the smart contract
// // conditions and swap params are stored in a mapping
// // aggregator address is gotten from the frontend based on the token selected
// function createSellSubscription(int priceTarget, address tokenIn, uint amount, address aggregatorAddress) public {
//     Subscription memory newSub = Subscription(msg.sender, 2, tokenIn, usdtAddress, amount, 0, priceTarget, aggregatorAddress, true);
//     subscriptions[subCounter] = newSub;
//     userSubscriptions[msg.sender].push(newSub);
//     // approve the contract to spend the given amount of tokens specified on the frontend
//     subCounter = subCounter + 1;
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
//     uint256 _subCounter = subCounter + 1;

//     for (uint i = 0; i < _subCounter; i++) {
//         address aggregatorAddress = subscriptions[i].aggregatorAddress;
//         int currentPrice = getLatestPrice(aggregatorAddress);
//         int priceTarget = subscriptions[i].priceTarget;
//         uint32 transactionType = subscriptions[i].transactionType;
//         bool status = subscriptions[i].active;
//         if (priceTarget <= currentPrice && transactionType == 1 && status == true) {
//             address owner_ = subscriptions[i].owner;
//             address token = subscriptions[i].tokenOut;
//             uint256 amount = subscriptions[i].amountIn;
//             // transfer from the user to the smart contract
//             IERC20 _token = IERC20(token);
//             _token.transferFrom(owner_, transactionsAdd, amount);
//             transactions.buyToken(token, amount, owner_);
//         }
//         else if (priceTarget <= currentPrice && transactionType == 2 && status == true) {
//             address owner_ = subscriptions[i].owner;
//             address token = subscriptions[i].tokenIn;
//             uint256 amount = subscriptions[i].amountIn;
//             // transfer from the user to the smart contract
//             IERC20 _token = IERC20(token);
//             _token.transferFrom(owner_, transactionsAdd, amount);
//             transactions.sellToken(token, amount, owner_);
//         }
//     }

// }

// }