// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

/**
 * @title IDinamikoPriceOracle
 * @author Dinamiko
 * @notice Defines the basic interface for the Dinamiko Price Oracle
 * - Original contract was written by Aave that the link https://github.com/aave/aave-v3-core/blob/29ff9b9f89af7cd8255231bc5faf26c3ce0fb7ce/contracts/interfaces/IAaveOracle.sol
 */
interface KeeperRegistrarInterface {
  function registerUpkeep(RegistrationParams calldata requestParams) external returns (uint256);

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
}
