function add(x: number): (number) => number {
    return function(y: number): number {
        return x+y
    }
}