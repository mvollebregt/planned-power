pragma solidity ^0.5.0;

contract MyFirstContract {

  function get() public pure returns (string memory) {
    return 'Absolutely Fabulous';
  }

  function whoAmI() public view returns (address) {
    return msg.sender;
  }
}
