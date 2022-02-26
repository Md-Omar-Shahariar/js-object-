const bottle = {color: 'yellow', hold: ' Water', price : 100, isClean: true}
const keys = Object.keys(bottle)
console.log(keys);
const values = Object.values(bottle)
console.log(values);
const pair = Object.entries(bottle)
console.log(pair);
// Object.seal(bottle)
Object.freeze(bottle)
delete bottle.isClean
console.log(bottle);