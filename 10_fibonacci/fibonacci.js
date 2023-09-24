const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    if (num < 0) return "OOPS";
    if (num === 0) return 0
    for (let i = 2; i <= num; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};

// Do not edit below this line
module.exports = fibonacci;