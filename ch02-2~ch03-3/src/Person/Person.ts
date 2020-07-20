import * as U from "../utils/makeRandomNumber"
import IPerson from './IPerson'

//생성자의 매개변수에 public과 같은 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다.
export default class Person implements IPerson{
    constructor(public name: string,public age:number) {}
}

export const makePerson = (name: string, age: number = U.makeRandomNumber()) => ({name,age})