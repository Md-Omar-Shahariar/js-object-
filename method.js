const student = {
    id: 101,
    name: 'Rj Kibria',
    balance: 5000,
    isRich : false,
    major: 'mathmatic',
    sunjects: ['English', 'physics', 'Bangla'],
    bestFriend: {
        name: 'Kundo',
        major: 'mathmatics'
    },
    takeExam: function(){
        console.log(this.name, 'taking Exam');
    },
    treatDe: function(expense){
        this.balance = this.balance -  expense
        return this.balance
    }

}


student.takeExam(   )
console.log(student.treatDe(1000));
const a = JSON.stringify(student.treatDe(1000))
console.log(a);