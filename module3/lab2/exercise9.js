// Write a function that caculates and returns the total of all salaries
function sumSalaries(salaries) {
    let total = 0;
    for (let person in salaries) {
        total += salaries[person];
    }
    return total;
}

// Write function that caculates and returns the name of person earing highest paid salary
function topEarner(salaries) {
    let higestEarner
    let higestSalary
    for (let person in salaries) {
        if (salaries[person] > highestSalary) {
            higestSalary = salaries [person];
            higestEarner = person;
        }
    }
    return highestEarner;
}