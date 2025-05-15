// Task 8: Write a function named 'isEven' that takes a number and returns true if it’s even, otherwise false
function isEven(num){
    if (num % 2==0){
        return true;
    } 
    else{
        return false;
    }
}

console.log(isEven(2));

// Task 9: Write a function named 'addNumbers' that accepts two parameters and returns their sum
function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(7,5));

// Task 10: Declare a variable named 'emptyValue' and assign it the value null
let emptyValue = null;

// Task 11: Declare a variable named 'notAssigned' without assigning any value to it
let notAssigned;

// Task 12: Write a function named 'getStringLength' that accepts a string and returns its length
function getStringLength(message){
    return message.length;
}

console.log(getStringLength("hello"))

// Task 13: Write a function named 'greetPerson' that accepts a name and returns "Hello, [name]!"
function greetPerson(name){
    return "Hello, "+ name;
}

console.log(greetPerson("Arv"))

// Task 14: Call your 'squareNumber' function with a number and log the result using console.log
function squareNumber(num){
    return num*num
}

console.log(squareNumber(7))

// Task 15: Use console.log to display a custom motivational message

function motivationalMsg(name){
    return "Keep going! You can do this " + name;
}

console.log(motivationalMsg("Arv"))