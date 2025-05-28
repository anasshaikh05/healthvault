// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthVault {
    mapping(address => string[]) public userFiles;

    function uploadHash(string memory cid) public {
        userFiles[msg.sender].push(cid);
    }

    function getFiles(address user) public view returns (string[] memory) {
        return userFiles[user];
    }
}