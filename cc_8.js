//Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) { // creates the function and parameters
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // calculates the net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logs netSalary to console
};
console.log("**Task 1**") // for console readability
calculateSalary(5000, 500, 0.1) // calls function
calculateSalary(7000, 1000, 0.15) // calls function

//Task 2 - Product Price After Discount
function calculateDiscount(price, discountRate) {  //  creates the function and parameters
    let finalPrice = price - (price * discountRate); // calculates final price
    console.log(`Final Price: $${finalPrice.toFixed(2)}`) // logs the final price to the console
};
console.log("**Task 2**") // for easier console readability
calculateDiscount(100, 0.2);  // calls function
calculateDiscount(250, 0.15); // calls function

//Task 3 Service Fee Calculation.
let calculateServiceFee = (amount, serviceType) => { // creates the arrow function and its parameters
    if (serviceType === "Premium") serviceFee = amount * 0.15; // calculates service fee for premium plan
    else if (serviceType === "Standard") serviceFee = amount * .10; // calculates service fee for stanard plan
    else serviceFee = amount *0.05; // calculates service fee for basic plan as it is the only option left
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`); // logs service fee to console
};
console.log("**Task 3**") //for easier console readability
calculateServiceFee(200, "Premium") // calls function
calculateServiceFee(500, "Standard") // calls function