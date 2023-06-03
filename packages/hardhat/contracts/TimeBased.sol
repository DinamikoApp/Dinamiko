// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

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

struct SwapParams {
  uint32 transactionType;
  address tokenIn;
  address tokenOut;
  uint256 amountIn;
  uint256 amountOut;
}

interface KeeperRegistrarInterface {
  function registerUpkeep(RegistrationParams calldata requestParams) external returns (uint256);
}

contract TimeBasedTransaction is ConfirmedOwner, Pausable, AutomationCompatibleInterface {
  LinkTokenInterface public immutable i_link;
  KeeperRegistrarInterface public immutable i_registrar;

  uint public counter;

  uint public immutable interval;
  uint public lastTimeStamp;

  constructor(
    LinkTokenInterface link,
    KeeperRegistrarInterface registrar,
    uint updateInterval,
    SwapParams memory _swapparams
  ) ConfirmedOwner(msg.sender) {
    i_link = link;
    i_registrar = registrar;

    interval = updateInterval;
    lastTimeStamp = block.timestamp;

    counter = 0;
  }

  function checkUpkeep(
    bytes calldata checkData
  ) external view override whenNotPaused returns (bool upkeepNeeded, bytes memory performData) {
    upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;

    performData = checkData;
  }

  function performUpkeep(bytes calldata /* performData */) external override whenNotPaused {
    if ((block.timestamp - lastTimeStamp) > interval) {
      lastTimeStamp = block.timestamp;
      // perform swap/transaction here
      counter = counter + 1;
    }
  }

  function registerAndPredictID(
    bytes calldata offchainConfig,
    bytes calldata checkData,
    bytes calldata encryptedEmail
  ) public returns (uint256 upkeepID) {
    // LINK must be approved for transfer - this can be done every time or once
    // with an infinite approval
    RegistrationParams memory params = RegistrationParams(
      "new Upkeep",
      encryptedEmail,
      address(this),
      100000,
      0x242dEb52CD278e2a724D4e597c5cCA028f3F9989,
      checkData,
      offchainConfig,
      500000000000000000
    );

    i_link.approve(address(i_registrar), params.amount);
    upkeepID = i_registrar.registerUpkeep(params);
    if (upkeepID != 0) {
      return upkeepID;
    } else {
      revert("auto-approve disabled");
    }
  }

  function withdraw(uint256 amount, address token) public onlyOwner {
    address owner = owner();
    // send token to user
  }

  function fund(uint256 amount, address token) public onlyOwner {
    // send token to contract
  }

  function performTransaction() public whenNotPaused {
    // perform swap or adding liquidity based on the input from the user
  }

  function pause() public onlyOwner {
    _pause();
  }
}

// 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06 link
// 0x57A4a13b35d25EE78e084168aBaC5ad360252467 registrar
