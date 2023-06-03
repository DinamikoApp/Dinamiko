// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(symbol, name) {}

  function faucet(address to, uint amount) public {
    _mint(to, amount);
  }
}
