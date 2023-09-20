const findTheOldest = function(peoples) {
    return peoples.reduce((oldest, currentPerson) => {
        // oldestAge gets the age of the oldest person's year of death and birth
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    
        // currentAge gets the age of the current person's year of death and birth
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    
        // return name if current age is older than the oldest age, else return current oldest age
        return oldestAge < currentAge ? currentPerson : oldest;
      });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};  

// Do not edit below this line
module.exports = findTheOldest;
