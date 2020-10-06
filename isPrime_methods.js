const {getRandomInteger} = require('./random');
const BigIntMath = require('./BigIntMath');

function isPrimeSimpleMethod(num) {
    num = BigIntMath.toBigIntFormat(num);

    const elementary = isPrimeVerify(num);
    if(elementary.verify) return elementary.value;

    for(let i = 3n; i < BigIntMath.sqrt(num); i++) {
        if(num % i === 0n) return false
    }
    return true
}

function isPrimeVerify(num) {
    if(num === 2n || num === 3n) return {verify: true, value: true}
    if(num % 2n === 0n || num === 1n) return {verify: true, value: false}

    return {verify: false}
}

function isPrimeByFermatTheorem(num) {
    num = BigIntMath.toBigIntFormat(num);

    const elementary = isPrimeVerify(num);
    if(elementary.verify) return elementary.value;

    //this parameter by the theorem must be less num-1
    //but larger numbers reduce performance
    const max = 10n;

    const a = BigInt(getRandomInteger(2n, max));
    return (a ** num - 1n) % num === 1n;
}

function isPrimeByMillerRabinTest(num, numberOfChecks = 10) {
    num = BigIntMath.toBigIntFormat(num);

    const elementary = isPrimeVerify(num);
    if(elementary.verify) return elementary.value;

    const {s, t} = getFormatForMillerRabinTest(num);

    for(let i = 0; i < numberOfChecks; i++) {

        //this parameter by the theorem must be less num-1
        //but larger numbers reduce performance
        const max = 10n;

        const a = BigInt(getRandomInteger(2n, max));
        let x = (a ** t) % num;

        if(x === 1n || x === num - 1n) continue

        for(let _ = 0n; _ < s - 1n; _++) {
            x = (x ** 2n) % num;

            if(x === 1n) return false
            if(x === num - 1n) break
        }

        return false
    }
    return true
}


// this func converts number to format (2 ^ s) * t
function getFormatForMillerRabinTest(num) {
    num = BigIntMath.toBigIntFormat(num);

    let t = num - 1n;
    let s = 0n;

    while(t % 2n === 0n) {
        t /= 2n;
        s += 1n;
    }
    return {s, t}
}


module.exports = {
    isPrimeByFermatTheorem,
    isPrimeByMillerRabinTest,
    isPrimeSimpleMethod
}