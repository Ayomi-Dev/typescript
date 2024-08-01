// interfaces are a way to define a certain structure of data that other data structure
// can adhere to whether they are classes, object literals or other interfaces.


interface Users {
    email: string,
    address: string,
    id: number
}

const users: Users = {
    id: 1,
    email: 'ayomide',
    address: 'lagos'
}
const {id, email} = users
// console.log(email)


interface Items {
    price: number,
    quantity: number,
    created_at: Date,
    customer: Users
}

const items: Items = {
    quantity: 2,
    price: 20,
    customer: users,
    created_at: new Date()
}
console.log(items);



// using interfaces as function argument types
function createUser (user: Users): void{
    console.log(user.email)
    // return user.email
}
createUser(users)

// using interfaces with arrays
const itemsList: Items[] = []

const addItem = (item: Items) => {
    itemsList.push(item);
    console.log(itemsList)
}
addItem(items)