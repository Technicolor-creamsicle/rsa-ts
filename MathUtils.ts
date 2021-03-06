import {randomInt} from "crypto";
import {Utilities} from "./Utilities";

/**
 * This class contains all the math shit for my stupid rewrite of RSA.
 */
export class MathUtils {

    /**
     * Generates a random-ish prime number between 1 and 65536
     */
    static randomPrime(): number {
        let out: number = randomInt(1, 65536)

        while (!Utilities.isPrime(out)) {
            out++
            if (out > 65536)
                out = randomInt(1, 65536)
        }
        return out
    }

    /**
     * Finds lowest common multiple between two numbers a and b
     * @param a Number to find the lowest common multiple against b
     * @param b Number to find the lowest common multiple against a
     */
    static lcm(a: number, b: number): number {
        //First the larger of the two numbers have to be found
        let largest: number
        if (a > b)
            largest = a
        else
            largest = b

        //Loops till it finds a multiple that fits both
        for (let i: number = largest; true; i++)
            if (i % a == 0 && i % b == 0)
                return i

    }

    /**
     * Finds greatest common denominator between two numbers a and b
     * @param a Number to find the greatest common denominator against b
     * @param b Number to find the greatest common denominator against a
     */
    static gcd(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    /**
     * So this math I don't fully know how to explain nor whether it is right.
     * @param a Number to find the Euclidean greatest common denominator against b
     * @param b Number to find the Euclidean greatest common denominator against a
     */
    static extendedEuclideanAlgorithm(a: number, b: number): [number, number, number] {
        //  r = gcd(a,b) i = multiplicative inverse of a mod b
        //       or      j = multiplicative inverse of b mod a
        //  Neg return values for i or j are made positive mod b or a respectively
        //  Iterative Version is faster and uses much less stack space
        let x = 0,
            y = 1,
            lx = 1,
            ly = 0,
            oa = a,  // Remember original a/b to remove
            ob = b  // negative values from return results
        while (b != 0) {
            let q = Math.floor(a / b);
            [a, b] = [b, a % b];
            [x, lx] = [(lx - (q * x)), x];
            [y, ly] = [(ly - (q * y)), y];

            if (lx < 0)
                lx += ob //If neg wrap modulo original b
        }

        if (ly < 0)
            ly += oa //If neg wrap modulo original a
        return [a, lx, ly] //Return only positive values
    }
}
