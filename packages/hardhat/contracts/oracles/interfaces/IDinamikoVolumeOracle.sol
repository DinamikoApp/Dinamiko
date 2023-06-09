// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

interface IDinamikoVolumeOracle {
  function getVolume() external view returns (uint256);

  function withdrawLink() external;

  function requestVolumeData() external returns (bytes32);

  function fulfill(bytes32 _requestId, uint256 _volume) external;
}
