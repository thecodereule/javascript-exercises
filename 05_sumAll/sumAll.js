const sumAll = function(...theArgs) {

    if (theArgs.some((num) => num < 0 || typeof num !== 'number' || !Number.isInteger(num))) {
        return 'ERROR';
    }

    const max = Math.max(...theArgs);
    const min = Math.min(...theArgs);
    
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
