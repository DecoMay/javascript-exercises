const removeFromArray = function(inputArray, ...optionalArgs) {
    const newArray = [];
    inputArray.forEach((item) => {
        if (!optionalArgs.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
