
// 1)
const employees = [
    { 
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true,
    },
    {
        firstName: "Mary", 
        department: "Finance", 
        designation: "Trainee", 
        salary: 18500, raiseEligible: true,
    },
    { 
        firstName: "Bill", 
        department: "HR", 
        designation: "Executive", 
        salary: 21200, 
        raiseEligible: false,
    }
];
console.log(employees);


// 2)
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log(company);


// 3)
const newEmployee = { 
    firstName: "Anna", 
    department: "Tech", 
    designation: "Executive", 
    salary: 25600, 
    raiseEligible: false,
};
company.employees.push(newEmployee);
console.log(company);


// 4)
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalary);


// 5)
company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
});
console.log(company);


// 6)
const workFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workFromHome.includes(employee.firstName);
});
console.log(company);