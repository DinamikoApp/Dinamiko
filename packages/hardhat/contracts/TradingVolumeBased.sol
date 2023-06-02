// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// importing necessary contracts
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/// struct for registration of contract with chainlink
/// might have to move it off-chain and register contract manually
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

/// interface for the transactions contract
interface Transactions {
    /// function to buy tokens
    function buyToken(address assetToken, uint amount, address receiver) external returns(uint);
    /// function to sell contracts
    function sellToken(address assetToken, uint amount, address receiver) external returns(uint);
    /// function to add liquidity
    function mintNewPosition(address token0, address token1, uint _amount0, uint _amount1, address receiver) external returns(uint256, uint128, uint256, uint256);
}

///  ERC20 token interface
interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

interface KeeperRegistrarInterface {
    function registerUpkeep(
        RegistrationParams calldata requestParams
    ) external returns (uint256);
}

contract TradingVolumeBased is ChainlinkClient, ConfirmedOwner, Pausable, AutomationCompatibleInterface {
    using Chainlink for Chainlink.Request;

    uint256 public volume1;
    uint256 public volume2;
    uint256 public volume3;
    bytes32 private jobId;
    uint256 private fee;

    event RequestVolume(bytes32 indexed requestId, uint256 volume);

    LinkTokenInterface public immutable i_link;
    KeeperRegistrarInterface public immutable i_registrar;

    /// subscription struct
    struct Subscription {
        address owner;
        uint32 transactionType;
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint256 amountOut;
        uint256 volumeTarget;
        string symbol;
    }

    uint subCounter;

    mapping (uint256 => Subscription) subscriptions;

    address public constant usdtAddress = 0x1F98431c8aD98523631AE4a59f267346ea31F984; // (look for usdt on mumbai)

    /**
     * Use an interval in seconds and a timestamp to slow execution of Upkeep
     */
    uint public immutable interval;
    uint public lastTimeStamp;

    Transactions transactions;
    address transactionsAdd;

    /**
     * @notice Initialize the link token and target oracle
     *
     */
    constructor(LinkTokenInterface link, KeeperRegistrarInterface registrar, uint updateInterval, address transactionsAddress) ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = "ca98366cc7314957b8c012c72f05aeeb";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)

        i_link = link;
        i_registrar = registrar;

        interval = updateInterval;
        lastTimeStamp = block.timestamp;

        transactions = Transactions(transactionsAddress);
        transactionsAdd = transactionsAddress;
    }

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

    function performUpkeep(bytes calldata /* performData */) external override {
            if ((block.timestamp - lastTimeStamp) > interval) {
            // perform swap/transaction here
            executeSubscriptions();
        }

    }

    function registerAndPredictID(bytes calldata offchainConfig, bytes calldata checkData, bytes calldata encryptedEmail) public returns(uint256 upkeepID) {
        // LINK must be approved for transfer - this can be done every time or once
        // with an infinite approval
        RegistrationParams memory params = RegistrationParams("new Upkeep", encryptedEmail, address(this), 100000, 0x242dEb52CD278e2a724D4e597c5cCA028f3F9989, checkData, offchainConfig, 500000000000000000);

        i_link.approve(address(i_registrar), params.amount);
        upkeepID = i_registrar.registerUpkeep(params);
        if (upkeepID != 0) {
            return upkeepID;
        } else {
            revert("auto-approve disabled");
        }
    }

    /// function to get the trading volume in 24 hours
    function requestVolumeData(string memory symbol) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        string memory url = string.concat("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=", symbol, "&tsyms=", "&tsyms=USD");
        req.add("get", url);

        string memory pathSpec = string.concat("RAW,", symbol, ",USD,VOLUME24HOUR");
        req.add("path", pathSpec);

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestVolume(_requestId, _volume);
        volume1 = _volume;
    }

    /// function to get the trading volume in 24 hours
    function requestVolumeData2(string memory symbol) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill2.selector
        );

        // Set the URL to perform the GET request on
        string memory url = string.concat("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=", symbol, "&tsyms=", "&tsyms=USD");
        req.add("get", url);

        string memory pathSpec = string.concat("RAW,", symbol, ",USD,VOLUME24HOUR");
        req.add("path", pathSpec);

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill2(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestVolume(_requestId, _volume);
        volume2 = _volume;
    }

    /// function to get the trading volume in 24 hours
    function requestVolumeData3(string memory symbol) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill3.selector
        );

        // Set the URL to perform the GET request on
        string memory url = string.concat("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=", symbol, "&tsyms=", "&tsyms=USD");
        req.add("get", url);

        string memory pathSpec = string.concat("RAW,", symbol, ",USD,VOLUME24HOUR");
        req.add("path", pathSpec);

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill3(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestVolume(_requestId, _volume);
        volume3 = _volume;
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

// create Subscription
// user inputs conditions to the smart contract
// conditions and swap params are stored in a mapping
// aggregator address is gotten from the frontend based on the token selected
function createBuySubscription(uint256 volumeTarget, address tokenOut, uint amount, string memory symbol) public {
    require(subCounter < 3);
    Subscription memory newSub = Subscription(msg.sender, 1, usdtAddress, tokenOut, amount, 0, volumeTarget, symbol);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
}

// user inputs conditions to the smart contract
// conditions and swap params are stored in a mapping
// aggregator address is gotten from the frontend based on the token selected
function createSellSubscription(uint256 volumeTarget, address tokenIn, uint amount, string memory symbol) public {
    require(subCounter < 3);
    Subscription memory newSub = Subscription(msg.sender, 2, tokenIn, usdtAddress, amount, 0, volumeTarget, symbol);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
}

function createAddLiqSubscription(uint256 volumeTarget, address token0, address token1, uint amount0, uint amount1, string memory symbol) public {
    require(subCounter < 3);
    Subscription memory newSub = Subscription(msg.sender, 3, token0, token1, amount0, amount1, volumeTarget, symbol);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
    // for both tokens
}

// execute transactions
// checks if the conditions are met and fires the function
function executeSubscriptions() public {
    string memory symbol1 = subscriptions[1].symbol;
    string memory symbol2 = subscriptions[1].symbol;
    string memory symbol3 = subscriptions[1].symbol;

    requestVolumeData(symbol1);
    requestVolumeData2(symbol2);
    requestVolumeData3(symbol3);

    uint256 volumeTarget1 = subscriptions[1].volumeTarget;
    uint32 transactionType1 = subscriptions[1].transactionType;

    uint256 volumeTarget2 = subscriptions[2].volumeTarget;
    uint32 transactionType2 = subscriptions[2].transactionType;

    uint256 volumeTarget3 = subscriptions[3].volumeTarget;
    uint32 transactionType3 = subscriptions[3].transactionType;

    if (volumeTarget1 <= volume1 && transactionType1 == 1) {
        address owner_ = subscriptions[1].owner;
        address token = subscriptions[1].tokenOut;
        uint256 amount = subscriptions[1].amountIn;
        // transfer from the user to the smart contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.buyToken(token, amount, owner_);
    }
    else if (volumeTarget1 <= volume1 && transactionType1 == 2) {
        address owner_ = subscriptions[1].owner;
        address token = subscriptions[1].tokenIn;
        uint256 amount = subscriptions[1].amountIn;
        // transfer from the user to the smarrt contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.sellToken(token, amount, owner_);
    }

    else if (volumeTarget1 <= volume1 && transactionType1 == 3) {
        address owner_ = subscriptions[1].owner;
        address token0 = subscriptions[1].tokenIn;
        uint256 amount0 = subscriptions[1].amountIn;
        address token1 = subscriptions[1].tokenOut;
        uint256 amount1 = subscriptions[1].amountOut;

        IERC20 _token0 = IERC20(token0);
        _token0.transferFrom(owner_, transactionsAdd, amount0);

        IERC20 _token1 = IERC20(token0);
        _token1.transferFrom(owner_, transactionsAdd, amount1);

        transactions.mintNewPosition(token0, token1, amount0, amount1, owner_);
    }


        if (volumeTarget2 <= volume2 && transactionType2 == 1) {
        address owner_ = subscriptions[2].owner;
        address token = subscriptions[2].tokenOut;
        uint256 amount = subscriptions[2].amountIn;
        // transfer from the user to the smart contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.buyToken(token, amount, owner_);
    }
    else if (volumeTarget2 <= volume2 && transactionType2 == 2) {
        address owner_ = subscriptions[2].owner;
        address token = subscriptions[2].tokenIn;
        uint256 amount = subscriptions[2].amountIn;
        // transfer from the user to the smarrt contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.sellToken(token, amount, owner_);
    }

    else if (volumeTarget2 <= volume2 && transactionType2 == 3) {
        address owner_ = subscriptions[2].owner;
        address token0 = subscriptions[2].tokenIn;
        uint256 amount0 = subscriptions[2].amountIn;
        address token1 = subscriptions[2].tokenOut;
        uint256 amount1 = subscriptions[2].amountOut;

        IERC20 _token0 = IERC20(token0);
        _token0.transferFrom(owner_, transactionsAdd, amount0);

        IERC20 _token1 = IERC20(token0);
        _token1.transferFrom(owner_, transactionsAdd, amount1);

        transactions.mintNewPosition(token0, token1, amount0, amount1, owner_);
    }

    if (volumeTarget3 <= volume3 && transactionType3 == 1) {
        address owner_ = subscriptions[3].owner;
        address token = subscriptions[3].tokenOut;
        uint256 amount = subscriptions[3].amountIn;
        // transfer from the user to the smart contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.buyToken(token, amount, owner_);
    }
    else if (volumeTarget3 <= volume3 && transactionType3 == 2) {
        address owner_ = subscriptions[3].owner;
        address token = subscriptions[3].tokenIn;
        uint256 amount = subscriptions[3].amountIn;
        // transfer from the user to the smarrt contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.sellToken(token, amount, owner_);
    }

    else if (volumeTarget3 <= volume3 && transactionType3 == 3) {
        address owner_ = subscriptions[3].owner;
        address token0 = subscriptions[3].tokenIn;
        uint256 amount0 = subscriptions[3].amountIn;
        address token1 = subscriptions[3].tokenOut;
        uint256 amount1 = subscriptions[3].amountOut;

        IERC20 _token0 = IERC20(token0);
        _token0.transferFrom(owner_, transactionsAdd, amount0);

        IERC20 _token1 = IERC20(token0);
        _token1.transferFrom(owner_, transactionsAdd, amount1);

        transactions.mintNewPosition(token0, token1, amount0, amount1, owner_);
    }

}

}
