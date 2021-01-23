"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathUtils_1 = require("./MathUtils");
const fs = require("fs");
//First lets calculate n which is called the "modulus" (prime 1 * prime 2)
const p = MathUtils_1.MathUtils.randomPrime();
const q = MathUtils_1.MathUtils.randomPrime();
//n Is the part of the public key!
const n = q * p;
console.info("p: " + p + "\nq: " + q + "\nn: " + n);
const lambdaN = MathUtils_1.MathUtils.lcm(q - 1, p - 1);
console.info("λ(n): " + lambdaN);
//Finding e: "Choose an integer e such that 1 < e < λ(n) and gcd(e, λ(n)) = 1; that is, e and λ(n) are coprime."
let e = 2;
while (MathUtils_1.MathUtils.gcd(lambdaN, e) != 1)
    e++;
console.info("e: " + e);
//Generates the private decryption exponent.
//d ≡ e^−1 (mod λ(n)); that is, d is the modular multiplicative inverse of e modulo λ(n).
let d = MathUtils_1.MathUtils.extendedEuclideanAlgorithm(e ** -1, lambdaN)[1];
console.info("Private exponent \"d\": " + d);
//Making "key files"
fs.writeFileSync("./PrivateKey.txt", "d: " + d.toString(16) + "\n");
fs.writeFileSync("./publicKey.txt", "n: " + n.toString(16) + "\n" + "e: " + e.toString(16));
//# sourceMappingURL=index.js.map