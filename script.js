function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b

}
console.log(mul(12,13));
// Greeting using a template literal
let name = "John"; // Assigning a value to 'name'
console.log('Hello, I am ${name}'); // Correct use of backticks

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
console.log(totalPrice);