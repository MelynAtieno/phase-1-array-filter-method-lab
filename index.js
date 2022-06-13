// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase()
    )

}

function fuzzyMatch(drivers, string){
    return drivers.filter(
        (match) => match.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}


function matchName(drivers, hometown){
    return drivers.filter((record) => record.name === hometown)
}

// function findMatching(source, sought) {
//     return source.filter(
//       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//     );
//   }
  
//   function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }
  
//   function matchName(source, soughtName) {
//     return source.filter((record) => record.name === soughtName);
//   }