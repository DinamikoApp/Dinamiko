// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IDinamikoInflationOracle {
  function requestYoyInflation() external returns (bytes32);

  function fulfillYoyInflation(bytes32 _requestId, bytes calldata _inflation) external;

  function changeOracle(address _oracle) external;

  function changeJobId(string calldata _jobId) external;

  function changeFee(uint256 _fee) external;

  function getChainlinkToken() external view returns (address);

  function withdrawLink() external;
}
