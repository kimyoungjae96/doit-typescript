<<<<<<< HEAD
import {range} from './range'

let reduceSum: number = range(1, 100+1).reduce((result: number, value: number) => result + value, 0)
=======
import {range} from '../05-1/range'

let reduceSum: number = range(1, 100 + 1).reduce((result:number, value:number) => result+value,0)
>>>>>>> master
console.log(reduceSum)