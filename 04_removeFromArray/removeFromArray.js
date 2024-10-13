const removeFromArray = function(array, ...theArgs) {

    return array.filter(element => !theArgs.includes(element));

};


// Do not edit below this line
module.exports = removeFromArray;

