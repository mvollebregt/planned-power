pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract PlannedPower {

  mapping(address => Consumption[]) ownerToPredictions;

  struct Consumption {
    uint startTimestamp;
    uint endTimeStamp;
    uint quantitykWh;
  }

  function getPredictions() public view returns (Consumption[] memory predictions) {
    return ownerToPredictions[msg.sender];
  }

  function setPredictions(Consumption[] memory predictions) public {
    for (uint i = 0; i < predictions.length; i++) {
      ownerToPredictions[msg.sender].push(predictions[i]);
    }
  }

}
