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

//Task 4 - Car Rental cost Calculation 
function calculateRentalCost(days, carType, insurance = false) {  //declares the function and assigns variables
    let carCosts = {"Economy": 40,"Standard":60,"Luxury":100}; // creates object that contains a key of each cartype and a value of each cost
    let finalCost =(carCosts[carType]* days)  // calculates car type cost per day
    if (insurance) { // checks if insurance === True
        finalCost += 20 *days; // adds 20 per day to final cost if insurance is true
    } 
    console.log(`Total Rental Cost: $${finalCost}`); // logs answer to the console
};
console.log("**Task 4**"); // for console readability
calculateRentalCost(3, "Economy", true); // calls function
calculateRentalCost(5, "Luxury", false); // calls function

//Task 5 - Loan Payment Calculations
function calculateLoanPayment(principal, rate, time) { //creates the function and the parameters
    let totalPayment = principal + (principal * rate * time); // calculates total payment
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`); // logs total payment to the console
};
console.log("**Task 5**"); // for console readability
calculateLoanPayment(1000, 0.05, 2); // calls function
calculateLoanPayment(5000, 0.07, 3); // calls function

//Task 6 -  Indentifying Large Transations
let transactions = [200, 1500, 3200, 800, 2500]; // declares an array
function filterLargeTransactions(transactions, filterFunction) {   // declares a function with parameters
    let filteredTransactions = transactions.filter(filterFunction); // applies a filter to transactions using the function inputed in the parameters
    console.log(`Large Transactions: ${filteredTransactions}`); // logs filtered transactions to the console l
};
console.log("**Task 6**"); // for console readability
filterLargeTransactions(transactions, amount => amount > 1000 ? amount : 0); // calls function  with filter function inputed

//Task 7 -Shopping Cart Tracker
function createCartTracker() { //creates a function
    let total = 0 // sets total equal to 0
    return function cartTracker(amount) { // creates nested function and parameter
        total += amount // adds amount to the current total
        return 'Total Cart Value: $' + total // logs total to the console
    }
};
let cart = createCartTracker();
console.log("**Task 7**"); // for console readability
console.log(cart(20)); // calls function and logs to console
console.log(cart(35)); //calls function and logs to console

//Task 8 - Savings Growth Projection
function caclulateSavings(years, amount) {
    if (years >= 10) return console.log(`projected Savings: $${amount.toFixed(2)}`);  //returns current amount when years is greater than or equal to 10
    return caclulateSavings(years + 1, amount * 1.05); // adds 1 to years parameter and 5% to amount parameter
    
};
console.log("**Task 8**");// for console readability
caclulateSavings(8,1000); // calls function
caclulateSavings(5,5000); // calls function
