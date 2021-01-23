"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var crypto_1 = require("crypto");
var Utilities_1 = require("./Utilities");
/**
 * This class contains all the math shit for my stupid rewrite of RSA.
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    /**
     * Generates a random-ish prime number between 1 and 65536
     */
    MathUtils.randomPrime = function () {
        var out = crypto_1.randomInt(1, 65536);
        while (!Utilities_1.Utilities.isPrime(out)) {
            out++;
            if (out > 1024)
                out = crypto_1.randomInt(1, 1024);
        }
        return out;
    };
    /**
     * Finds lowest common multiple between two numbers a and b
     * @param a Number to find the lowest common multiple against b
     * @param b Number to find the lowest common multiple against a
     */
    MathUtils.lcm = function (a, b) {
        //First the larger of the two numbers have to be found
        var largest;
        if (a > b)
            largest = a;
        else
            largest = b;
        //Loops till it finds a multiple that fits both
        for (var i = largest; true; i++)
            if (i % a == 0 && i % b == 0)
                return i;
    };
    /**
     * Finds greatest common denominator between two numbers a and b
     * @param a Number to find the greatest common denominator against b
     * @param b Number to find the greatest common denominator against a
     */
    MathUtils.gcd = function (a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            var t = b;
            b = a % b;
            a = t;
        }
        return a;
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;
//# sourceMappingURL=MathUtils.js.map