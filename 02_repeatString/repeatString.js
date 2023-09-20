const repeatString = function(text, num) {
    let repeatedText = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            repeatedText += text;
        }
    } else {
        repeatedText = 'ERROR';
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
