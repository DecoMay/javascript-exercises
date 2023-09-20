const sumAll = function(numberStart, numberEnd) {
    let output = '';
    let sum = 0;
    if ((numberStart >= 0) && (numberEnd >= 0) && (typeof numberStart) === (typeof numberEnd)) {
        if (numberStart > numberEnd) {
            for (let i = numberEnd; i <= numberStart; i++) {
                sum += i;
            }
        } else {
            for (let i = numberStart; i <= numberEnd; i++) {
                sum += i;
            }
        }
        output = sum;
    } else {
        output = 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
