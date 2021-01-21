"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math = void 0;
var crypto_1 = require("crypto");
var Utilities_1 = require("./Utilities");
var Math = /** @class */ (function () {
    function Math() {
    }
    /**
     * Generates a random-ish prime number between 1 and 65536
     */
    Math.randomPrime = function () {
        var out = crypto_1.randomInt(1, 65536);
        while (!Utilities_1.Utilities.isPrime(out)) {
            out++;
            if (out > 1024)
                out = crypto_1.randomInt(1, 1024);
        }
        return out;
    };
    Math.lcm = function (a, b) {
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
    return Math;
}());
exports.Math = Math;
