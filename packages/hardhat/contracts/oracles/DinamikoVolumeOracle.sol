// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "./interfaces/IDinamikoVolumeOracle.sol";

/**
 * @notice Contract that calls the Chainlink node to retrieve the 24h volume of a given token
 * @dev This contract is based on the example provided by Chainlink
 */
contract DinamikoVolumeOracle is ChainlinkClient, ConfirmedOwner, IDinamikoVolumeOracle {
  using Chainlink for Chainlink.Request;

  uint256 private volume;
  bytes32 private jobId;
  uint256 private fee;
  string private symbol;

  event JobIdUpdated(bytes32 newJobId);
  event SymbolUpdated(string newSymbol);
  event FeeUpdated(uint256 newFee);

  /**
   * @notice Initialize the link token and target oracle
   *
   * Sepolia Testnet details:
   * Link Token: 0x779877A7B0D9E8603169DdbD7836e478b4624789
   * Oracle: 0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD (Chainlink DevRel)
   * jobId: ca98366cc7314957b8c012c72f05aeeb
   */
  constructor(
    address _linkAddress,
    address _linkOracleAddress,
    bytes32 _jobId,
    string memory _symbol
  ) ConfirmedOwner(msg.sender) {
    setChainlinkToken(_linkAddress);
    setChainlinkOracle(_linkOracleAddress);
    setJobId(_jobId);
    fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    setSymbol(_symbol);
  }

  /**
   *  @notice  Create a Chainlink request to retrieve the 24 Hours  API response, find the target data, ==
   */
  function requestVolumeData() public override returns (bytes32 requestId) {
    Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

    // Set the URL to perform the GET request on
    string memory url = string(
      abi.encodePacked("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=", symbol, "&tsyms=USD")
    );

    req.add("get", url);

    string memory pathSpec = string(abi.encodePacked("RAW,", symbol, ",USD,VOLUME24HOUR"));
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
  function fulfill(bytes32 _requestId, uint256 _volume) public override recordChainlinkFulfillment(_requestId) {
    volume = _volume;
  }

  function getVolume() public view override returns (uint256) {
    return volume;
  }

  /**
   * Allow withdraw of Link tokens from the contract
   */
  function withdrawLink() public override onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }

  /**
   * Set the jobId
   */
  function setJobId(bytes32 _jobId) public onlyOwner {
    jobId = _jobId;
    emit JobIdUpdated(_jobId);
  }

  /**
   * Set the symbol
   */
  function setSymbol(string memory _symbol) public onlyOwner {
    symbol = _symbol;
    emit SymbolUpdated(_symbol);
  }

  /**
   * Set the fee
   */
  function setFee(uint256 _fee) public onlyOwner {
    fee = _fee;
    emit FeeUpdated(_fee);
  }
}
