
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
let age = 18
if (age >= 19) {
    console.log("You are an Adult!")
} else if(age === 16){
    console.log("You have 2 more years left to be an Adult")
} else {
    console.log("You are not old enough!")
}

// Ternary Operators
let stat = age >= 18 ? console.log("Adult") : console.log("Minor")

// switch statement
let day = 3;
switch (day) {
    case 2: console.log("Tuesday"); break
    case 1: console.log("Monday"); break

    
    default: console.log("Not a valid day!")
};

// Loops
for (let i = 1; i <= 5; i++) {
    // console.log(i)
}

let arr = ["Apple", "Banana", "Orange"]
for (let num of arr) {
    // console.log(num)
}

// Function
function greet() {
    return "Hello"
}

const greetMe = greet()
// console.log(greet())
console.log(greetMe)

function calc(ar1, arg2) {
    return ar1 + arg2
}
console.log(calc(88, 2))

function calc_with_default_arg(ar1, arg2 = 55) {
    return ar1 + arg2
}
console.log(calc_with_default_arg(10))

const func = () => {
    console.log("Arrow Function result")
}

func()

