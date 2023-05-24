// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

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

interface KeeperRegistrarInterface {
  function registerUpkeep(RegistrationParams calldata requestParams) external returns (uint256);
}

contract UpkeepIDConsumerExample is AutomationCompatibleInterface {
  AggregatorV3Interface internal priceFeed;

  LinkTokenInterface public immutable i_link;
  KeeperRegistrarInterface public immutable i_registrar;

  /**
   * Public counter variable
   */
  uint public counter;

  /**
   * Use an interval in seconds and a timestamp to slow execution of Upkeep
   */
  uint public immutable interval;
  uint public lastTimeStamp;

  int priceTarget;

  constructor(LinkTokenInterface link, KeeperRegistrarInterface registrar, uint updateInterval, int _priceTarget) {
    i_link = link;
    i_registrar = registrar;

    interval = updateInterval;
    lastTimeStamp = block.timestamp;

    counter = 0;

    priceFeed = AggregatorV3Interface(0x5741306c21795FdCBb9b265Ea0255F499DFe515C);

    priceTarget = _priceTarget;
  }

  function checkUpkeep(
    bytes calldata checkData
  ) external view override returns (bool upkeepNeeded, bytes memory performData) {
    int price = getLatestPrice();

    upkeepNeeded = price >= priceTarget;

    // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    performData = checkData;
  }

  function performUpkeep(bytes calldata /* performData */) external override {
    int price = getLatestPrice();

    if (price >= priceTarget) {
      counter = counter + 1;
      // transaction to be performed here
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

  /**
   * Returns the latest price.
   */
  function getLatestPrice() public view returns (int) {
    (
      ,
      /* uint80 roundID */ int price /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/,
      ,
      ,

    ) = priceFeed.latestRoundData();

    return price;
  }
}

// 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06 link
// 0x57A4a13b35d25EE78e084168aBaC5ad360252467 registrar
