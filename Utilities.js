"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    /**
     *  This method returns if a positive number is prime or not.
     * @param num Number to be checked for primality.
     */
    Utilities.isPrime = function (num) {
        if (num <= 3)
            return num > 1;
        if (num % 2 === 0 || num % 3 === 0)
            return false;
        for (var i = 5; Math.pow(i, 2) <= num; i += 6)
            if (num % i == 0 || num % (i + 2) == 0)
                return false;
        return true;
    };
    return Utilities;
}());
exports.Utilities = Utilities;
