<<<<<<< HEAD
import {range} from './range'

let reduceSum: number = range(1, 10+1).reduce((result,value)=>(value*result),1)
=======
import {range} from '../05-1/range'

let reduceSum: number = range(1, 10+1).reduce((result,value) => result* value,1)
>>>>>>> master
console.log(reduceSum)