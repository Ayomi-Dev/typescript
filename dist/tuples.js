"use strict";
// TUPLES //
// tuples are arrays that allows values of different types in a specific order
// tuples behaves like an array
let person;
person = ['sring', 45, true]; //value type are in specific order
// person =  [45,'sring',  true] //value type are not in specific order, so it gives eror
let color;
color = [4, '50%', .5];
// tuples in functions
const coords = () => {
    const lat = 100;
    const direction = 'north';
    return [lat, direction];
};
console.log(coords());
// named tuples
// this allows us to add a name to identify each value type in a tuple
let user;
user = ['Ayo', 33];
let det = [1, 'name'];
const newA = user.concat([...det]);
console.log(newA);
