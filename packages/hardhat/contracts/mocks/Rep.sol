// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Rep is ERC20 {
    constructor() ERC20("REP", "Auger Token") {}

    function faucet(address to, uint amount) public {
        _mint(to, amount);
    }
}
