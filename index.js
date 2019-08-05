// Code your solet

// let findMatching = (drivers, string) => {
//   return findMatching.filter(function(d){
//     return d.toLowerCase() === string.toLowerCase();
//   })
// }
// return findMatching;
function findMatching(drivers,string){
  return drivers.filter(d => d.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (drivers, string) => {
  return drivers.filter(d => d.indexOf(string)===0)
}

let matchName = (drivers, string) => {
  return drivers.filter(d => d.name === string)
}
