const add = (num1, num2) => num1+num2

const multiply = (num1, num2, num3) => num1 * num2 * num3

const fiveTimes = (num1) => num1 * 5
// parameter 1 ta hoile bracket lage na
const tenTimes = num1 => num1*10

//kono parameter na thakle
const getName = () => 'Afridi'

const doMath = (num1, num2) =>{
    const sum = num1 + num2
    const sub = num1 - num2
    const multiply = num1*num2
    return [sum,sub,multiply]
}



console.log(add(1,2)
)
console.log(multiply(2,3,4));

console.log(fiveTimes(3));

console.log(tenTimes(10));
console.log(getName());

const [a,b,c] = doMath(20, 10)
console.log(a,b,c);