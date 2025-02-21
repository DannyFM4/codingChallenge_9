// Task 1: Creating an Employee Class

class Employee {  // lines 3-9 create a class called Employee
    constructor(name, id, department, salary) { //  determines the parameters name, id, department, and salary
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };

    getDetails() { // creates a method inside the class that calls all of the employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    };

    calculateAnnualSalary() { // creates method that calculates the employee annual salary
        return this.salary * 12;
    };
};

// creates an employee using the class
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

// runs the methods in the class and logs the outputs in the console
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());