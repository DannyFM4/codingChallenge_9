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


// Task 2: Creating a Manager Class (Inheritance & Method Overriding)


class Manager extends Employee {  // lines below create a class called manager, that extends the details from Employee
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // this line keeps the info from the Employee Class
        this.teamSize = teamSize;
    };

    getDetails() { // creates a method inside the class that calls all of the Manager details
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    };

    calculateBonus() { // creates a method inside the class that calculates the annual bonus for the manager
        return this.calculateAnnualSalary() * .1;
    };

};

// line below create a manager using the manager class parameters
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

// the lines below run the methods used in the manager class and log the outputs in the console
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());