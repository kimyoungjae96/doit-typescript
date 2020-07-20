import {IPerson,ICompnay} from './IPerson_ICompany'

let jack: IPerson = {name:"jack", age:32},
    jane: IPerson = {name:"Jane", age:32}

let apple: ICompnay = {name:"Apple Computer", age: 43},
    ms: ICompnay = {name:"Microsoft",age:44}

console.log(jack,jane,apple,ms)