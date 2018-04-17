let myObject = {
    prop: 1000,
    second_prop: 'string'
}

let pointer = myObject;
pointer.prop = 2000;

console.log(myObject); // { prop: 2000, second_prop: 'string' }
console.log(myObject === pointer); // true

pointer = { prop: 1000, second_prop: 'another_string'};

console.log(myObject); // { prop: 2000, second_prop: 'string' }
console.log(myObject === pointer); // false
