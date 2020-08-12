const isAnyTrue = (values: boolean[]) => values.some(value=>value==true)

console.log(isAnyTrue([false,false,true]))
console.log(isAnyTrue([false,false,false]))