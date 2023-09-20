const palindromes = function (text) {
    text = (text.replace(/\W/g, ''));
    const palindromeText = Array.from(text.toLowerCase());
    // console.log(palindromeText);

    for (let i = 1; i < palindromeText.length - i; i++) {
        if (palindromeText[i - 1] === palindromeText[palindromeText.length - i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
