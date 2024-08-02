// This type is a way to let TS know that a particular variable data
// or value can be one or several different types.

let value: number | string

value = 1
value = "2"

let mail: string | null //this case can be used in the case where a user is logged-in in an application or not
mail = 'ayo.com'
mail = null

// using union type as a type-alias 
type Id = string | number

let someId: Id
someId ='45'
someId = 33.3





            // sideeffects of union types
//  we can only use props and methods common
// to both string and number types when we pass in union type as a function parameter,

function swapIdType (id: Id) {
    // parseInt(id) //error because the method is not common to both number and string type

    // the avoid such errors, we use type guards i.e checking the type of argument
    // parsed in before executing codes

    if(typeof id === 'string'){
        return parseInt(id)
    }
    else{
        return id.toString()
    }

    return id
}
const idOne = swapIdType("5")
const idTwo = swapIdType(5)

// console.log(idOne)
// console.log(idTwo)






// tagged interfaces --- using interfaces as union type value
interface Person {type: 'person', age: number, size: string, id: Id}
interface User {type: 'user', surname: string, mail: string, id: Id}

const boy: Person = {type: 'person', age: 30, size: 'large', id: '12'}
const male: User = {type: 'user', surname: 'kunle', mail: 'dev.dev', id: 7}

const logDetails = (value: Person | User) => {
    // in order to let TS know the specific data we want to access its data in this case
    // we set a common property to both interfaces, then use a check method to access
    // the data we want

    if(value.type === "user"){
        console.log(value.mail)
    }
    if(value.type == 'person'){
        console.log(value.id)
    }
}

logDetails(boy)
logDetails(male)