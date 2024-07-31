"use strict";
// string data types
// let str = 'string'  //TS infers type of a data based on its value by default even when the type is not specified
let str = 'string';
console.log(str);
// number data types
let num = 4; //infers type by default
// let num: number = 4
console.log(num);
//////// array types ////////
//   string arrays  ////
let arr = ['a', 'b', 'c'];
// let arr: string[] = ['a', 'b', 'c']
let ele = arr[2]; //infers type to the value by default
arr.push('d'); //allows only string data type 
// number arrays ////
// let numArr = [1,2,3,4]
let numArr = [1, 2, 3, 4];
numArr.push(5); //allows only number data type
console.log(arr, numArr);
// union array --- different type of data in an array
let union = ['a', 1, true];
let uni = union[0]; //cannot specify or infer data type   
/////// object literals ////////
// let obj = {id: 1, name: 'name', age: 33}  //automatically infers type to value of the property of the object
let obj = {
    id: 1,
    name: 'name',
    age: 33,
};
obj.name = "45";
console.log(obj.name);
// Any type
// let myName;    //infers the type 'abny' to the value of the variable by default
let myName;
myName = 'ayo';
myName = 45;
myName = [];
myName = true;
myName = {};
