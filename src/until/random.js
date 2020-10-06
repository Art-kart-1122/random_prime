
function getRandomInteger(min = 0, max = 0) {
    min = parseInt(min);
    max = parseInt(max);

    if(isNaN(min) || isNaN(max)) throw new Error('Parameters is incorrect')

    if(!isFinite(min) || !isFinite(max)) throw new Error('This function doesnt work with very big integer value')

    if(min > max ) throw Error('range is incorrect')

    return  Math.floor((Math.random() * Math.floor(max)) + min)
}



module.exports = {
    getRandomInteger
}