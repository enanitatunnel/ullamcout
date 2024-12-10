// Define a class or object constructor
function Calculator() {
    this.operators = ['+', '-', '*', '/']; // Array of operators
    this.addOperator = function(op) {
        this.operators.push(op); // Method to add an operator to the array
    };
}

// Create an instance of Calculator
let calc = new Calculator();

// Accessing operators array using `this.operators`
console.log(calc.operators); // Outputs: ['+', '-', '*', '/']

// Adding a new operator
calc.addOperator('%');
console.log(calc.operators); // Outputs: ['+', '-', '*', '/', '%']
