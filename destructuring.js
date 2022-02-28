const company  = {
    name: 'It Solution',
    work : {
        web: ['Front End', 'Backend'],
        contentWriting: 'doc',

    },
    location: 'Dhanmondi'

}

const {name, location} = company
const {web , contentWriting} = company.work

console.log(name,location, web[0], contentWriting);