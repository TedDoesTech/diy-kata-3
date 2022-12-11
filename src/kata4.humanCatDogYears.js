const humanCatDogYears = (number) => {
    let remainingHumanYears
    if(number >2) {
        remainingHumanYears = number - 2;
    };
    let catYears
    if(number <2) {
        catYears = 15
    } else if (number >=2 && number <3){
        catYears = 24
    } else {
        catYears = 24+(remainingHumanYears*4)
    }
    let dogYears
    if(number <2) {
        dogYears = 15
    } else if (number >=2 && number <3) {
        dogYears = 24
    } else {
        dogYears = 24+(remainingHumanYears*5)
    }
    return [number, catYears, dogYears]
};
module.exports = humanCatDogYears;



//create value for remaining human years; number - 2 - DONE
//use if functions to create the cat/dog years: 
//if 1 = + 15, if 2 = +24 and if >2 multiply remain human years (create parameter for this) by 4.
//add all of above togther and add to catYears. 
//same for dog: 
//if 1 = + 15, if 2 = +24 and if >2 multiply remain human years (create parameter for this) by 5.
//add all of above togther and add to dogYears. 
// create array of passed number + catYears + dogYears