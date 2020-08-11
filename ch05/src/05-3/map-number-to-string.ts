<<<<<<< HEAD
import {range} from './range'

let names: string[] = range(1, 5+1).map((val, index) => `[${index}]: ${val}`)
=======
import {range} from '../05-1/range'

let names: string[] = range(1, 5+1).map((val,index) => `[${index}: ${val}]`)
>>>>>>> master
console.log(names)