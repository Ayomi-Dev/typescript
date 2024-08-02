// type-alias is also a way of making custom types of data values, like interfaces
// The difference between type-alas and interface is that type aliases use assignment
// operator, i.e the equal to sign but the interface does not.

// example --- with a tuple

type Rgb = [number, number, number]

function getRgbColorCode(): Rgb {
    const r = Math.floor(Math.random() * 255) 
    const g = Math.floor(Math.random() * 255) 
    const b = Math.floor(Math.random() * 255) 
    return ([r, g, b])
}
console.log(getRgbColorCode());

// type-alias with object literals
type Students = {subject: string, score: number}
const subject = 'chemistry', 
score = 70

const student: Students = {subject, score }
// console.log(student)

function addStudent (stud: Students) {
    console.log(`This student had a score of ${stud.score} in ${stud.subject}`)
}
addStudent(student)
addStudent({subject: 'maths', score: 75})