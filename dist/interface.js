"use strict";
// interfaces are a way to define a certain structure of data that other data structure
// can adhere to whether they are classes, object literals or other interfaces.
const users = {
    id: 1,
    email: 'ayomide',
    address: 'lagos'
};
const { id, email } = users;
const items = {
    quantity: 2,
    price: 20,
    customer: users,
    created_at: new Date()
};
console.log(items);
// using interfaces as function argument types
function createUser(user) {
    console.log(user.email);
    // return user.email
}
createUser(users);
// using interfaces with arrays
const itemsList = [];
const addItem = (item) => {
    itemsList.push(item);
    console.log(itemsList);
};
addItem(items);
