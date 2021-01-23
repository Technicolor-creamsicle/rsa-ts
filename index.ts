import {MathUtils} from "./MathUtils";
import * as fs from "fs";

//First lets calculate n which is called the "modulus" (prime 1 * prime 2)
const p: number = MathUtils.randomPrime()
const q: number = MathUtils.randomPrime()

//n Is the part of the public key!
const n: number = q * p
console.info("p: " + p + "\nq: " + q + "\nn: " + n)

const lambdaN: number = MathUtils.lcm(q - 1, p - 1)
console.info("λ(n): " + lambdaN)

//Finding e: "Choose an integer e such that 1 < e < λ(n) and gcd(e, λ(n)) = 1; that is, e and λ(n) are coprime."
let e = 2
while (MathUtils.gcd(lambdaN, e) != 1)
    e++
console.info("e: " + e)

//Generates the private decryption exponent.
//d ≡ e^−1 (mod λ(n)); that is, d is the modular multiplicative inverse of e modulo λ(n).
let d = MathUtils.extendedEuclideanAlgorithm(e ** -1, lambdaN)[1]
console.info("Private exponent \"d\": " + d)


//Making "key files"
fs.writeFileSync("./PrivateKey.txt", "d: " + d.toString(16) + "\n")
fs.writeFileSync("./publicKey.txt", "n: " + n.toString(16) + "\n" + "e: " + e.toString(16))

