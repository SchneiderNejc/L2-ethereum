// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract Greeter {
    string greeting;

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
