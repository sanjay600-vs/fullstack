// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Arrow function to multiply two numbers
const mul = (a, b) => {
    return a * b;
};
console.log(mul(12, 11)); // Output: 132

// Greeting using a template literal
let name = "John";
console.log(Hello, I am ${name});

// Array operations
const numbers = [1, 3, 4, 88, 21, -35, -26];

// Multiply each number by 3
const mappednum = numbers.map((n) => n * 3);
console.log(mappednum);

// Filter only positive numbers
const postNum = numbers.filter((n) => n > 0);
console.log(postNum);

// Array of product objects
const products = [
    { name: "tv", price: 8000 },
    { name: "phone", price: 9000 },
    { name: "watch", price: 2000 }
];

// Calculate total price using reduce
const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice); // Output: 19000

// Filter products with price > 5000
const filteredProduct = products.filter((n) => n.price > 5000);
console.log(filteredProduct);

// Destructuring
const number = [1, 2, 3, 4, 5, 6];
const [first, second, third] = number;
console.log(third); // Output: 3

const user = { name1: 'CR7', password: '12345' };
const { name1, password } = user;
console.log(password); // Output: 12345

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const copy = [...arr1, ...arr2];
console.log(copy); // Output: [1,2,3,4,5,6]

// Rest parameters
function add2(...args) {
    return args;
}
console.log(add2(1, 2, 3, 4, 5)); // Output: [1,2,3,4,5]

// Callback functions
function function1() {
    console.log('from inside callback');
}

function fun(name1, callback) {
    callback();
    return ${name1} from outside callback; // Corrected template string
}
console.log(fun('function', () => { console.log('from inside callbacks'); }));

// Async/Await with Fetch API
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // corrected endpoint
        const data = await response.json(); // moved before console.log
        data.map((user) => console.log(user.name)); // corrected field name
    } catch (error) {
        console.log(error);
    }
}
fetchUsers();