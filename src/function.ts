        // Regular functions in typescript////

// in TS, we have to specify the type of the value we are passing in as an arg in a function
function add(a: number, b: number) {
    return a + b
}

// arrow function
const numStr = (a:number, b:string) => {
    return a + b
}

const addAll = (nums: number[]) => {
    const total = nums.reduce((acc, total) => acc + total, 0);
    return total
}
const result = addAll([1,2,3,4,5,6]);
console.log(result)

// add(2, 3)
// console.log(numStr(4, '4'))

function greet(person: string, word: string): string {
    return `${word}, ${person}`
}
const greeting = greet('Ayo', 'Good morning')
console.log(greeting);





// Any type function
function anytype (value: any): any {
    return `${value} and ${value}`
}

const showResult = anytype('ayo')
console.log(showResult)
