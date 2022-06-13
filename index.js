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

