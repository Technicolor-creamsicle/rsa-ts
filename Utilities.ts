export class Utilities {
    /**
     *  This method returns if a positive number is prime or not.
     * @param num Number to be checked for primality.
     */
    static isPrime(num: number): boolean {
        if (num <= 3)
            return num > 1
        if (num % 2 === 0 || num % 3 === 0)
            return false
        for (let i: number = 5; i ** 2 <= num; i += 6)
            if (num % i == 0 || num % (i + 2) == 0)
                return false

        return true
    }


}
