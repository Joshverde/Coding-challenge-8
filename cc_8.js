//Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) { // creates the function and parameters
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // calculates the net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logs netSalary to console
};
console.log("**Task 1**") // for console readability
calculateSalary(5000, 500, 0.1) // calls function
calculateSalary(7000, 1000, 0.15) // calls function