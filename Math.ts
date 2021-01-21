import {randomInt} from "crypto";
import {Utilities} from "./Utilities";

export class Math {

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
}
