const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  };

  const fareMultiplier = createFareMultiplier(4);

const multipliedFare = fareMultiplier(fare);

console.log(multipliedFare); // Output: 40

  

  const fareDoubler = createFareMultiplier(2);
  

  const fareTripler = createFareMultiplier(3);
  

  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };
  
  
 
  const drivers = ['John', 'Jane', 'Mike', 'Emily', 'David'];
  
  const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers);
  
  const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  console.log(lastTwoDrivers); 
  
  const fare = 10;
  const doubledFare = fareDoubler(fare);
  console.log(doubledFare); 
  
  const tripledFare = fareTripler(fare);
  console.log(tripledFare); 
  