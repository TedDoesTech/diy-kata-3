const reachDestination = (distance, speed) => {
//create time variable
let time = distance/speed
let timeRounded = (Math.ceil(time*2)/2)
return `I should be there in ${timeRounded} hours` 
};

module.exports = reachDestination;
