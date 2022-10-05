const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => { return journey.startLocation;  }) 
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => { return journey.endLocation;  }) 
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => { return journey.transport==transport;  }) 
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => { return journey.distance>minDistance;  }) 
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => { return total + journey.distance;  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // this is the tricky one , get list with duplicates, then remove duplicates
  const journeysWithDuplicates = this.journeys.map((journey) => { return journey.transport; }) 
  
  const journeysNoDuplicates = [...new Set(journeysWithDuplicates)];
  return journeysNoDuplicates;
};


module.exports = Traveller;
