//using object literal
const student = {
    name: 'sakib Al hasan',
    job: 'cricketer'
}

//constractor
const person = new Object()
console.log(person);

//
const human = Object.create(student)
console.log(human.job);


class People{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}


const people = new People('afridi' , 21)
console.log(people);

function Manush(name){
    this.name = name
}

const man = new Manush('kader')
console.log(man);