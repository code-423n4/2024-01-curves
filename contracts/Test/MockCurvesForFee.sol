// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "hardhat/console.sol";

contract MockCurvesForFee {
    function curvesTokenBalance(address token, address account) public view returns (uint256) {
        return IERC20(token).balanceOf(account);
    }

    function curvesTokenSupply(address token) public view returns (uint256) {
        return IERC20(token).totalSupply();
    }
}
