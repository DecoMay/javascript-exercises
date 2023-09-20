const fibonacci = function(num) {
    num = parseInt(num);
    let result = 'OOPS';
    let f1 = 0;
    let f2 = 0;

    for (let i = 1; i <= num; i++) {
        if (i == 1) {
            result = 1;
            f1 = 1;
            continue;
        }
        result = f1 + f2;
        f2 = f1;
        f1 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
