
// const name = "Mark"
// const age = 27
// const isMarried = true
// const isNull = null
// const hasHome = undefined

// var isHome;


// console.log(typeof(isNull))

// operations
// let sum = 5 + 3
// console.log(sum)
// let power = 2 ** 3
// console.log(power)

// let multiplication = 2 * 4
// let substraction =  8 - 4
// let division = 10 / 2
// console.log(multiplication)
// console.log(substraction)
// console.log(division)

// // Assignment Operators (=, +=, -=, *=, /= %= **= )
// // let x = 10 
// // x = 10 + 5


// let x = 10
// x +=5;
// console.log(x)

// let name = "James"
// name +="Musa"

// console.log(name)

// let y = 15
// y -=5
// console.log(y)

// let d = 10
// d *=2;

// console.log(d)

// console.log(typeof("5"))
// console.log(typeof(5))


// // Comparison Operators (==, ===, !=, !==, >, <, <=, >=)
// const five = "5"
// console.log(5 == "5")
// console.log(5 === five)

// console.log(5 != 4)
// console.log(5 !== "5")
// console.log(5 > 4)
// console.log(5 < 4)

// console.log(5 >= 5)
// console.log(5 <= 3)


// // Logical Operators (&&, ||, !)
// // let isTrue = false && false
// let isTrue = true && true
// console.log(isTrue)

// const or = false || false;
// console.log(or)

// let notFalse = !false
// console.log(notFalse)

// Control Structures/Control Flow (if, else)
// let age = 18
// if (age >= 19) {
//     console.log("You are an Adult!")
// } else if(age === 16){
//     console.log("You have 2 more years left to be an Adult")
// } else {
//     console.log("You are not old enough!")
// }

// // Ternary Operators
// let stat = age >= 18 ? console.log("Adult") : console.log("Minor")

// // switch statement
// let day = 3;
// switch (day) {
//     case 2: console.log("Tuesday"); break
//     case 1: console.log("Monday"); break

    
//     default: console.log("Not a valid day!")
// };

// Loops
for (let i = 1; i <= 5; i++) {
    // console.log(i)
}

// let arr = ["Apple", "Banana", "Orange"]
// for (let num of arr) {
//     // console.log(num)
// }

// // Function
// function greet() {
//     return "Hello"
// }

// const greetMe = greet()
// // console.log(greet())
// console.log(greetMe)

// function calc(ar1, arg2) {
//     return ar1 + arg2
// }
// console.log(calc(88, 2))

// function calc_with_default_arg(ar1, arg2 = 55) {
//     return ar1 + arg2
// }
// console.log(calc_with_default_arg(10))

const func = () => {
    console.log("Arrow Function result")
}

// func()


const calcAge = (a, b) => a + b;

console.log(calcAge(2, 4))

// Local vs Global Scope
const name = "John"

function greetings() {
    const greet = "Hello"
    console.log(greet + " " + name)


}
// console.log(greet)
greetings()

///////// hoisted
// console.log(man)
// const man = 1;
let age;
age = 23;

const group = "football"
let sub = group.slice(0, 4)
console.log(sub)

// let str = "string"

// str.push("blalbal")

// console.log(str)

// Data Structure in Javascript
let fruits =  ["apple", "banana", "orange", "mango", "cherry", "fish"] //index of 0 - 1.2....
console.log(fruits[12])
// fruits.push("mango")
// fruits.pop()
// fruits.shift()
// fruits.unshift("cherry");
// fruits.splice(1, 1, "cashew")
// console.log(fruits)

// let subset = fruits.slice()
// console.log(subset)
// console.log(fruits)

// let LastName = "musa"
// console.log(LastName)
// const result = LastName.toUpperCase()
// console.log(result)


// Looping through Arrays: forEach(), map(), filter(), reduce()
// fruits.forEach(fruit => console.log(fruit.toUpperCase()))

let str = "Anything"

// fruits.forEach(fruit => console.log(fruit))
// let fruitsUpperCase = fruits.map(fruit => {
//     return fruit.toUpperCase()
// })
// console.log(fruitsUpperCase)

// const longs = fruits.filter(fruit => fruit.length > 5)
// console.log(longs)

// let totalLength = fruits.reduce((acc, fruit) => {
//     console.log(acc)
//     console.log(fruit)
//     return acc + fruit.length, 2
// }
// )
// console.log(totalLength)
// console.log(fruits)

// Sorting Arrays: sort(), Finding element: find(), findIndex()
// console.log(fruits)
// fruits.sort();

console.log(fruits)

const result = fruits.find(fruit => fruit === "banana")
console.log(result)

const index = fruits.findIndex(fruit => fruit === "cherry")
console.log(index)

const items = Array("Book", "Pen", "Pencil")
console.log(items)

// Multi-Dimensional Arrays
const numbers = [[1, 2, 3], [10, 20, 30]]
console.log(numbers)

// Objects
// const person = Object("")
const person = {name: "Mark", age: 23, isMarried: false}
console.log(person)

// Accessing and updating properties (dot notation, bracket notation)
console.log(person.name)
console.log(person["isMarried"])

// Looping through Objects
