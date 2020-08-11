export class RangeIterable {
    constructor(public from:number, public to:number) {
    }
    [Symbol.iterator]() {
        const that = this
        let currenValue = that.from
        return {
            next() {
                const value = currenValue < that.to ? currenValue++ : undefined
                const done = value == undefined
                return {value, done}
            }
        }
    }
}