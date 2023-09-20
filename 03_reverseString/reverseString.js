const reverseString = function(text) {
    let reversedText = '';
    for (let i = 0; i <= text.length; i++) {
        reversedText = text.slice(i, i + 1) + reversedText;
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
