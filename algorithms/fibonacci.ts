const fib = (n: number): number => {
    if(n === 0) return 0
    if(n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

const fibWhile = (n: number): number => {
    const values = [0, 1]
    while(values.length <= n) {
        values.push(values[values.length - 2] + values[values.length - 1])
    }
    return values[values.length - 1];
}

console.log(fib(8))
console.log(fibWhile(8))
