import {range} from './range'

let reduceSum: number = range(1, 10+1).reduce((result,value)=>(value*result),1)
console.log(reduceSum)