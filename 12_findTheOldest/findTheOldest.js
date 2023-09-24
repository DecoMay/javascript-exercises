const findTheOldest = function(peoples) {
    const peopleAge = peoples.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        
        console.log(oldestAge, currentAge, oldest.name, currentPerson.name);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
    console.log(peopleAge.name)
    return peopleAge;
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};  


// Do not edit below this line
module.exports = findTheOldest;