# Javascript Objects

------
## Object References

Os objetos em javascript são passados como referência e não como uma cópia, entretanto, esse *binding* é dinâmico.

```javascript
let myObject = {
    prop: 1000,
    second_prop: 'string'
}

let pointer = myObject;
pointer.prop = 2000;

console.log(myObject); // { prop: 2000, second_prop: 'string' }
console.log(myObject === pointer); // true

pointer = {};

console.log(myObject); // { prop: 2000, second_prop: 'string' }
console.log(myObject === pointer); // false

```
