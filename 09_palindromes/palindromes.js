const palindromes = function (text) {
    const textArray = text.replace(/\W|_/g, '').toLowerCase();
    // const textLenght = textArray.length - 1;
    // let isPalindrome = false;
    // console.log(textArray);
    // for (let i = 0; i < textLenght - i; i++) {
    //     if (textArray[i] === textArray[textLenght - i]) {
    //         // console.log("Continue");
    //         isPalindrome = true;
    //         continue;
    //     } else {
    //         // console.log("break")
    //         isPalindrome = false;
    //         break;
    //     }
    // }
    // console.log(textArray.split('').reverse().join("") == textArray);
    return textArray.split('').reverse().join("") == textArray;
};

// Do not edit below this line
module.exports = palindromes;