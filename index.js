// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, string){
    return drivers.filter(driver=> driver.toLowerCase()=== string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver){
        return string.substring(0, 1)===driver.substring(0,1)
    })
}
function matchName(drivers, argument){
    return drivers.filter(function(driver){
        return driver.name === argument
    });
}
    