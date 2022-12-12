const joinNames = (namesObj) => {
const namesArray = namesObj.map((namesObj) => {
    return `${namesObj.name}`
})
const namesString = namesArray.reduce((acc, curr, index) => {
    if(index < namesArray.length-1) {
        return `${acc}, ${curr}`  
    } else {
        return `${acc} & ${curr}`  
    }
})   
return namesString;
};

module.exports = joinNames;
