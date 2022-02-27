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
const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);
const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);
const getGirlFriend= (name = "Sokhina")=>"name"; console.log(getGirlFriend()); 