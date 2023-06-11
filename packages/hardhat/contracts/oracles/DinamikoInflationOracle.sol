// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "./interfaces/IDinamikoInflationOracle.sol";

contract DinamikoInflationOracle is ChainlinkClient, ConfirmedOwner, IDinamikoInflationOracle {
  using Chainlink for Chainlink.Request;

  uint256 public yoyInflation;
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
    req.add("abi", "int256");
    req.add("multiplier", "1000000000000000000");
    req.add("refundTo", Strings.toHexString(uint160(msg.sender), 20));
    return sendChainlinkRequestTo(oracleId, req, fee);
  }

  function fulfillYoyInflation(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    yoyInflation = uint256(toInt256(_inflation));
  }

  function changeOracle(address _oracle) public override onlyOwner {
    oracleId = _oracle;
  }

  function changeJobId(string memory _jobId) public override onlyOwner {
    jobId = _jobId;
  }

  function changeFee(uint256 _fee) public override onlyOwner {
    fee = _fee;
  }

  function toInt256(bytes memory _bytes) internal pure returns (int256 value) {
    assembly {
      value := mload(add(_bytes, 0x20))
    }
  }

  function getInflationRate() public view override returns (uint256) {
    return yoyInflation;
  }

  function getChainlinkToken() public view override returns (address) {
    return chainlinkTokenAddress();
  }

  function withdrawLink() public override onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }
}
