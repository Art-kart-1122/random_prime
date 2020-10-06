class BigIntMath {
    static toBigIntFormat(value) {
        return typeof value === 'bigint' ? value : BigInt(value)
    }

    static sqrt(value) {
        value = this.toBigIntFormat(value);

        if (value < 0n) throw new Error('square root of negative numbers is not supported')

        if (value < 2n) return value;

        function newtonIteration(n, x0) {
            const x1 = ((n / x0) + x0) >> 1n;
            if (x0 === x1 || x0 === (x1 - 1n)) {
                return x0;
            }
            return newtonIteration(n, x1);
        }

        return newtonIteration(value, 1n);
    }

    static getRandom(lengthByte) {
        while (true) {
            const result = Number.parseInt(require('crypto').randomBytes(lengthByte).toString('hex'), 16);

            if(!isFinite(result)) throw new Error('Argument length byte is incorrect. The number is Infinity')
            if(!isNaN(result)) return BigInt(result)

        }

    }
}

module.exports = BigIntMath;