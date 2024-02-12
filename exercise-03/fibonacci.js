/**
 * Retrieve the last element in the fibonacci sequence
 * @param {int} n
 * @returns {int}
 */
export function fibonacci(n)  {

    let [a, b, i] = [0, 1, 2];
    let c = (n === 0 ? a : n) === 1 ? 1 : n;

    for(i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}


