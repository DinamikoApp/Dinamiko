// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

interface IDinamikoInflationOracle {
  function changeOracle(address _oracle) external;

  function changeJobId(string calldata _jobId) external;

  function changeFee(uint256 _fee) external;

  function getChainlinkToken() external view returns (address);

  function withdrawLink() external;

  function getInflationRate() external view returns (uint256);
}
