// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// importing necessary contracts
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/ITransactions.sol";


/// @title KeeperRegistrarInterface
/// @author NatX
/// @notice upkeep registration interface
interface KeeperRegistrarInterface {
    function registerUpkeep(
        RegistrationParams calldata requestParams
    ) external returns (uint256);
}

/// @notice registration params struct for upkeep registration
/// @dev params are passed into the registerandpredict ID function
struct RegistrationParams {
    string name;
    bytes encryptedEmail;
    address upkeepContract;
    uint32 gasLimit;
    address adminAddress;
    bytes checkData;
    bytes offchainConfig;
    uint96 amount;
}

/// @title InflationRateBased
/// @author NatX
/// @notice The contract handles the creation of inflation rate based subscriptions and executing of these type of subscriptions
/// @dev The contract utilizes the Uniswap V3 contracts to buy tokens, sell tokens and add liquidity
contract InflationRateBased is ChainlinkClient, ConfirmedOwner, Pausable, AutomationCompatibleInterface {
    using Chainlink for Chainlink.Request;

    int256 public inflationWei;
    address public oracleId;
    string public jobId;
    uint256 public fee;

    event RequestVolume(bytes32 indexed requestId, uint256 volume);

    LinkTokenInterface public immutable i_link;
    KeeperRegistrarInterface public immutable i_registrar;

    /// @notice subscription struct that holds the neccesary subscription data for a subscription
    struct Subscription {
        address owner; // the address of the user setting up the subscription
        uint32 transactionType; // the type of transaction to be carried out (buy token, sell token, add liquidity)
        address tokenIn; // the token that is used to purchase tokens (default is usdt) when buying tokens OR token1 when adding liquidity OR token to be sold when selling a token
        address tokenOut; // the token that is to be bought when buying tokens OR token2 when adding liquidity OR token to be paid to the user when selling tokens (default usdt)
        uint256 amountIn; // the amount of usdt that is used to purchase tokens when buying tokens OR amount token1 to be added as liquidity when adding liquidity OR amount of tokens to be sold when selling a token
        uint256 amountOut; // the amount of token2 to be added as liquidity
        int256 inflationTarget; // the inflation rate target for the subscription
        bool active; // the status of the subscription, true for active and false for deleted
    }
    // subscription counter, keeps track of the number of subscriptions recorded
    uint subCounter;

    // subscriptions mapping that maps a uint to subscription
    mapping (uint256 => Subscription) subscriptions;
    // mapping that maps users address to their subscriptions
    mapping (address => Subscription[]) public userSubscriptions;

    // the USDT address
    address public immutable usdtAddress;

    // the interval between performing upkeeps default one hour
    uint public immutable interval;
    // the last timestamp when an upkeep was performed
    uint public lastTimeStamp;

    // transactions contract interface
    Transactions transactions;
    // transactions contract address
    address transactionsAdd;

    /// @notice the constructor function
    /// @dev initilizes the needed parameters
    /// @param link the link token address
    /// @param registrar the upkeep registrar address
    /// @param updateInterval time interval for checking upkeep
    /// @param transactionsAddress address of transactions contract
    /// @param _usdtAddress the usdt token address
    constructor(uint _fee, string memory _jobId, address _oracleId, LinkTokenInterface link, KeeperRegistrarInterface registrar, uint updateInterval, address transactionsAddress, address _usdtAddress) ConfirmedOwner(msg.sender) {
        setChainlinkToken(address(link));
        oracleId = _oracleId;
        jobId =  _jobId;// "d220e5e687884462909a03021385b7ae"
        fee = (_fee * LINK_DIVISIBILITY) / 10; // 0,5 * 10**18 (Varies by network and job)

        i_link = link;
        i_registrar = registrar;

        interval = updateInterval;
        lastTimeStamp = block.timestamp;

        transactions = Transactions(transactionsAddress);
        transactionsAdd = transactionsAddress;

        usdtAddress = _usdtAddress;
    }

    /// @notice function to register the contract for chainlink upkeeps
    /// @dev this function has to be called before upkeeps can work, should be the first function to be called 
    /// @param params the registration params
    function registerAndPredictID(RegistrationParams memory params) public returns(uint256) {
        i_link.approve(address(i_registrar), params.amount);
        uint256 upkeepID = i_registrar.registerUpkeep(params);
        if (upkeepID != 0) {
            return upkeepID;
        } else {
            revert("auto-approve disabled");
        }
    }

    /// @notice function to check if an upkeep needs to be performed
    /// @dev if the check is completed and 
    /// @param checkData passed in by the chainlink node/operator
    /// @return upkeepNeeded returns if the upkeep is needed or not
    function checkUpkeep(
        bytes calldata checkData
    )
        external
        view
        override
        whenNotPaused
        returns (bool upkeepNeeded, bytes memory performData)
    {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;

        performData = checkData;
    }

    /// @notice handles the automatic execution of subscriptions
    /// @dev additional checks are performed before the upkeep is performed
    function performUpkeep(bytes calldata /* performData */) external override {
            if ((block.timestamp - lastTimeStamp) > interval) {
            // perform swap/transaction here
            requestInflationWei();
            executeSubscriptions();
            lastTimeStamp = block.timestamp;
        }

    }

    /// @notice This functions gets the current inflation rate
    /// @dev The function needs to be fired first before the inflation rate can be updated (a few seconds have to pass first the inflation rate is set)
    function requestInflationWei() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
        bytes32(bytes(jobId)),
        address(this),
        this.fulfillInflationWei.selector
        );
        req.add("service", "truflation/current");
        req.add("keypath", "yearOverYearInflation");
        req.add("abi", "int256");
        req.add("multiplier", "1000000000000000000");
        req.add("refundTo",
        Strings.toHexString(uint160(msg.sender), 20));

        return sendChainlinkRequestTo(oracleId, req, fee);
    }

    /// @notice this function sets the inflation rate value
    /// @dev This function is called inside the requestInflationWei function
    function fulfillInflationWei(
        bytes32 _requestId,
        bytes memory _inflation
        ) public recordChainlinkFulfillment(_requestId) {
        inflationWei = toInt256(_inflation);
    }

    /// @notice converts bytes type to int256
    /// @param _bytes the bytes input to be converted
    /// @return value the converted int value to be returned
    function toInt256(bytes memory _bytes) internal pure
        returns (int256 value) {
        assembly {
        value := mload(add(_bytes, 0x20))
        }
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

    // function to pause the contract
    function pause() public onlyOwner {
        _pause();
    }



    /// @notice function to create a subscription to buy a token
    /// @dev sets the neccesary subscription params, the user needs to approve the transactions contract first on the frontend to spend the specified amounts of tokens
    /// @param inflationTarget the inflation rate that has to be satisfied for subscription execution
    /// @param tokenOut the token that the user wants to buy
    /// @param amount the amount worth of tokens the user wants to buy in USDT
    function createBuySubscription(int256 inflationTarget, address tokenOut, uint amount) public {
        Subscription memory newSub = Subscription(msg.sender, 1, usdtAddress, tokenOut, amount, 0, inflationTarget, true);
        subscriptions[subCounter] = newSub;
        userSubscriptions[msg.sender].push(newSub);
        subCounter = subCounter + 1;
        // approve the contract to spend the given amount of tokens specified on the frontend
    }

    /// @notice function to create a subscription to sell a token
    /// @dev sets the neccesary subscription params, the user needs to approve the transactions contract first on the frontend to spend the specified amounts of tokens
    /// @param inflationTarget the inflation rate that has to be satisfied for subscription execution
    /// @param tokenIn the token that the user wants to sell
    /// @param amount the amount worth of tokens the user wants to sell
    function createSellSubscription(int256 inflationTarget, address tokenIn, uint amount) public {
        Subscription memory newSub = Subscription(msg.sender, 2, tokenIn, usdtAddress, amount, 0, inflationTarget, true);
        subscriptions[subCounter] = newSub;
        userSubscriptions[msg.sender].push(newSub);
        subCounter = subCounter + 1;
        // approve the contract to spend the given amount of tokens specified on the frontend
    }

    /// @notice function to create a subscription for adding liquidity
    /// @dev sets the neccesary subscription params, the user needs to approve the transactions contract first on the frontend to spend the specified amount of tokens
    /// @param inflationTarget the inflation rate that has to be satisfied for subscription execution
    /// @param token0 the token that the user wants to add liquidity for
    /// @param amount0 the amount worth of tokens the user wants to add as liquidity
    /// @param token1 the token that the user wants to add liquidity for
    /// @param amount1 the amount worth of tokens the user wants to add as liquidity
    function createAddLiqSubscription(int256 inflationTarget, address token0, address token1, uint amount0, uint amount1) public {
        Subscription memory newSub = Subscription(msg.sender, 3, token0, token1, amount0, amount1, inflationTarget, true);
        subscriptions[subCounter] = newSub;
        userSubscriptions[msg.sender].push(newSub);
        subCounter = subCounter + 1;
        // approve the contract to spend the given amount of tokens specified on the frontend
        // for both tokens
    }

    /// @notice function to get the subscriptions of a user
    /// @param user the users' address
    /// @return userSubscriptions all subscriptions of the user
    function getTransactions(address user) public view returns(Subscription[] memory) {
        return userSubscriptions[user];
    }

    /// @notice function to delete a subscription
    /// @param i the index of the subscription to be deleted
    function deleteSubscription(uint i) public {
        require(subscriptions[i].owner == msg.sender);
        subscriptions[i].active = false;
    }

    /// @notice execute transactions
    /// @dev checks if the conditions are met and fires the function
    function executeSubscriptions() public {
        
        for (uint256 i = 0; i < subCounter; i++) {

        if (subscriptions[i].inflationTarget <= inflationWei && subscriptions[i].transactionType == 1 && subscriptions[i].active == true) {
            // transfer from the user to the smart contract
            IERC20 _token = IERC20(usdtAddress);
            _token.transferFrom(subscriptions[i].owner, transactionsAdd, subscriptions[i].amountIn);
            transactions.buyToken(subscriptions[i].tokenOut, subscriptions[i].amountIn, subscriptions[i].owner);
        }
        else if (subscriptions[i].inflationTarget <= inflationWei && subscriptions[i].transactionType == 2 && subscriptions[i].active == true) {
            // transfer from the user to the smarrt contract
            IERC20 _token = IERC20(subscriptions[i].tokenIn);
            _token.transferFrom(subscriptions[i].owner, transactionsAdd, subscriptions[i].amountIn);
            transactions.sellToken(subscriptions[i].tokenIn, subscriptions[i].amountIn, subscriptions[i].owner);
        }
        else if (subscriptions[i].inflationTarget <= inflationWei && subscriptions[i].transactionType == 3 && subscriptions[i].active == true) {
            IERC20 _token0 = IERC20(subscriptions[i].tokenIn);
            _token0.transferFrom(subscriptions[i].owner, transactionsAdd, subscriptions[i].amountIn);

            IERC20 _token1 = IERC20(subscriptions[i].tokenOut);
            _token1.transferFrom(subscriptions[i].owner, transactionsAdd, subscriptions[i].amountOut);

            transactions.mintNewPosition(subscriptions[i].tokenIn, subscriptions[i].tokenOut, subscriptions[i].amountIn, subscriptions[i].amountOut, subscriptions[i].owner);
        }
        }

    }

}
