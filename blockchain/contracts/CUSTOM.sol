pragma solidity ^0.4.13;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract CUSTOM is StandardToken, Ownable{

  string public name = "CUSTOM Test Token";
  string public symbol = "CUSTOM";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 100000 * 1 ether ;

  function CUSTOM() {
    totalSupply = INITIAL_SUPPLY;
    balances[this] = INITIAL_SUPPLY;
  }

  function mintToken(address target, uint256 mintedAmount) onlyOwner {
      balances[target] += mintedAmount;
      totalSupply += mintedAmount;
      Transfer(0, owner, mintedAmount);
      Transfer(owner, target, mintedAmount);
  }

  // @dev Gives the sender 10000 CUSTOM's,
  function getTokens() {
    uint256 value = 10000000000000000000000;
    if (balances[this] < value) return;
    require(balances[msg.sender] < 200000);
    balances[this] = balances[this].sub(value);
    balances[msg.sender] = balances[msg.sender].add(value);
  }
}