//Functions

function greeting() {
    console.log('Hello World');
}

greeting();


function addition(num1, num2) {
    console.log(num1 + num2);
}

addition(20, 2);

function registerUser(user = 'Anon') {

    // if (!user) {
    //     user = 'Anon';
    // } //back in the day you will use this where user is not set. now we use default param. -like in the register user fxn
    return user + ` you are welcome`;
}

console.log(registerUser('Danny'));

//rest param

function summing(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}
console.log(summing(1, 5, 10));


function summ(...numbers) {
    return numbers;
}
console.log(summ(1, 2, 3, 4, 5));

//you can insert as many content as you want using the rest operator, and will be stored in an array and you can do anything you want on that array.

//objets as params

function loginUser(user) {
    return `This user ${user.name} is successfully registered with id: ${user.id}`;
}

const user = {
    name: 'Daniel',
    id: 546589,
}
console.log(loginUser(user));

console.log(loginUser({
    id: 2133546,
    name: 'Akon',
}));

//block scope, not accessible from global or function scope

for (let i = 0; i <= 5; i++) {
    console.log(i);
};

// console.log(i); this console log will give an error because it is trying to access a block scope element from the global scope.


//nested scope
function first() {
    const g = 100;

    function second() {
        const h = 500;

        console.log(g+h);
    }

    second();

}

first();

//function declaration

function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100000));

//function expression - this is basically assigning a function to a variable.

const addMinusSign = function (value) {
    return '-' + value;
};

console.log(addMinusSign(500));

//Arrow functions
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 5));

//make it even shorter

//implicit return - meaning we are not specifying the return but it is returning.
const substract = (c, d) => c - d;

console.log(substract(50, 25));

//Immediately invoked function expressions

//if a variable was already declared in the global scope of another js file linked with our second js file, then trying to name a variable on the other js file gives an error because it was already declared in another js file. In this case declaring an IIFE comes to the rescue.

//lets say js file one has this variable declared;

const uzer = 'Dan';
console.log(uzer);

//trying to declare a similar way in js file two like above will give an error, so to use an IIFE we do this;

(function () {
    const uzer = 'Tony';
    console.log(uzer);
})();

//declaration is now scoped inside an IIFE.

//add a parameter to an IIFE

(function (name) {
    console.log('Hello ' + name);
})('Dan');

//function challenge:

//Number One

//Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.For bonus points, write it as a one line arrow function

function getCelsius(F) {
    return (F - 32) * 5 / 9;
    
}
console.log(Math.round(getCelsius(100)));

// (F) => (F - 32) * 5 / 9;

// console.log(getCelsius(100));

console.log(`The temperatur is ${Math.round(getCelsius(100))}\xB0C`);

//Number 2

//Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

//**Expected Result:**

//```JavaScript
//console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }

const minMax = (n) => { 
    const min = Math.min(...n);
    const max = Math.max(...n);

    return {
        min,
        max,
    };
};
    
console.log(minMax([1, 2, 3, 4, 5, 6, 7]));


//Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

(function (length, width) {
    const area = length * width;

    const display = `The area of a rectangle with ${length} and width of ${width} is ${area}`;

    console.log(display);
})(2,2);
