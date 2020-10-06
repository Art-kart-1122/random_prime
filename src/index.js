const {isPrimeSimpleMethod, isPrimeByMillerRabinTest, isPrimeByFermatTheorem} = require('./isPrime_methods');
const BigIntMath = require('./until/BigIntMath');


function getPrimeGenerateCandidate(lengthBytes) {
    let num = BigIntMath.getRandom(lengthBytes);
    while(!isPrimeSimpleMethod(num)) num = BigIntMath.getRandom(lengthBytes)

    return num
}


function getRandomPrime(lengthBytes, generateFunction, verifyFunction) {
    let candidate = generateFunction(lengthBytes);
    while (! verifyFunction(candidate)) candidate = generateFunction(lengthBytes);

    return candidate
}


const result = getRandomPrime(2, getPrimeGenerateCandidate, isPrimeByMillerRabinTest);
const result2 = getRandomPrime(2, getPrimeGenerateCandidate, isPrimeByFermatTheorem);
console.log(result)



