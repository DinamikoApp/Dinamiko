// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "./interfaces/IDinamikoInflationOracle.sol";

contract DinamikoInflationOracle is ChainlinkClient, ConfirmedOwner, IDinamikoInflationOracle {
  using Chainlink for Chainlink.Request;

  string public yoyInflation;
  address public oracleId;
  string public jobId;
  uint256 public fee;

  constructor(address oracleId_, string memory jobId_, uint256 fee_, address token_) ConfirmedOwner(msg.sender) {
    setChainlinkToken(token_);
    oracleId = oracleId_;
    jobId = jobId_;
    fee = fee_;
  }

  function requestYoyInflation() public returns (bytes32 requestId) {
    Chainlink.Request memory req = buildChainlinkRequest(
      bytes32(bytes(jobId)),
      address(this),
      this.fulfillYoyInflation.selector
    );
    req.add("service", "truflation/current");
    req.add("keypath", "yearOverYearInflation");
    req.add("abi", "json");
    req.add("refundTo", Strings.toHexString(uint160(msg.sender), 20));
    return sendChainlinkRequestTo(oracleId, req, fee);
  }

  function fulfillYoyInflation(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    yoyInflation = string(_inflation);
  }

  function changeOracle(address _oracle) public onlyOwner {
    oracleId = _oracle;
  }

  function changeJobId(string memory _jobId) public onlyOwner {
    jobId = _jobId;
  }

  function changeFee(uint256 _fee) public onlyOwner {
    fee = _fee;
  }

  function getChainlinkToken() public view returns (address) {
    return chainlinkTokenAddress();
  }

  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }
}
