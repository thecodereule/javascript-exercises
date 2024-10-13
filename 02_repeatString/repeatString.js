const repeatString = function(string, repeatTimes) {
    let newString = '';

    if (repeatTimes < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < repeatTimes; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
