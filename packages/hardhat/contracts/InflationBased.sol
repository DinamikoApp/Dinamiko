// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// importing necessary contracts
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
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

    int256 public inflationWei;
    address public oracleId;
    string public jobId;
    uint256 public fee;

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
        int256 inflationTarget;
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
        oracleId = 0x6D141Cf6C43f7eABF94E288f5aa3f23357278499;
        jobId = "d220e5e687884462909a03021385b7ae";
        fee = (5 * LINK_DIVISIBILITY) / 10; // 0,5 * 10**18 (Varies by network and job)

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

  function fulfillInflationWei(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    inflationWei = toInt256(_inflation);
  }

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

// create Subscription
// user inputs conditions to the smart contract
// conditions and swap params are stored in a mapping
// aggregator address is gotten from the frontend based on the token selected
function createBuySubscription(int256 inflationTarget, address tokenOut, uint amount) public {
    Subscription memory newSub = Subscription(msg.sender, 1, usdtAddress, tokenOut, amount, 0, inflationTarget);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
}

// user inputs conditions to the smart contract
// conditions and swap params are stored in a mapping
// aggregator address is gotten from the frontend based on the token selected
function createSellSubscription(int256 inflationTarget, address tokenIn, uint amount) public {
    Subscription memory newSub = Subscription(msg.sender, 2, tokenIn, usdtAddress, amount, 0, inflationTarget);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
}

function createAddLiqSubscription(int256 inflationTarget, address token0, address token1, uint amount0, uint amount1) public {
    Subscription memory newSub = Subscription(msg.sender, 3, token0, token1, amount0, amount1, inflationTarget);
    subscriptions[subCounter] = newSub;
    subCounter = subCounter + 1;
    // approve the contract to spend the given amount of tokens specified on the frontend
    // for both tokens
}

// execute transactions
// checks if the conditions are met and fires the function
function executeSubscriptions() public {
    requestInflationWei();
    
    for (uint256 i = 0; i < subCounter; i++) {
            int inflationTarget = subscriptions[i].inflationTarget;
    uint32 transactionType = subscriptions[i].transactionType;
    if (inflationTarget <= inflationWei && transactionType == 1) {
        address owner_ = subscriptions[i].owner;
        address token = subscriptions[i].tokenOut;
        uint256 amount = subscriptions[i].amountIn;
        // transfer from the user to the smart contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.buyToken(token, amount, owner_);
    }
    else if (inflationTarget <= inflationWei && transactionType == 2) {
        address owner_ = subscriptions[i].owner;
        address token = subscriptions[i].tokenIn;
        uint256 amount = subscriptions[i].amountIn;
        // transfer from the user to the smarrt contract
        IERC20 _token = IERC20(token);
        _token.transferFrom(owner_, transactionsAdd, amount);
        transactions.sellToken(token, amount, owner_);
    }

    else if (inflationTarget <= inflationWei && transactionType == 3) {
        address owner_ = subscriptions[i].owner;
        address token0 = subscriptions[i].tokenIn;
        uint256 amount0 = subscriptions[i].amountIn;
        address token1 = subscriptions[i].tokenOut;
        uint256 amount1 = subscriptions[i].amountOut;

        IERC20 _token0 = IERC20(token0);
        _token0.transferFrom(owner_, transactionsAdd, amount0);

        IERC20 _token1 = IERC20(token0);
        _token1.transferFrom(owner_, transactionsAdd, amount1);

        transactions.mintNewPosition(token0, token1, amount0, amount1, owner_);
    }
    }

}

}
