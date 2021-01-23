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
            if (out > 1024)
                out = randomInt(1, 1024)
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
        while(b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

}
