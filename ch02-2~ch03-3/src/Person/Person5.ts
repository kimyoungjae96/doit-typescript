abstract class APerson5 {
    abstract name: string
    constructor(public age?: number) {

    }
}

class Person5 extends APerson5{
    constructor(public name:string,age?:number) {
        super(age);
    }
}
let jack5 : Person5 = new Person5('jack',32)
console.log(jack5)