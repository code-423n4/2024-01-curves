// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./CurvesERC20.sol";

contract CurvesERC20Factory {
    function deploy(string memory name, string memory symbol, address owner) public returns (address) {
        CurvesERC20 tokenContract = new CurvesERC20(name, symbol, owner);
        return address(tokenContract);
    }
}
