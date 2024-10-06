import {Employee, Status} from "./Employee";
import {PreHiredEmployee} from "./PreHiredEmployee";

export class Department {
    name: string;
    domain: string;
    employees: Employee[];
    budget: Budget;

    constructor(name: string, domain: string, employees: Employee[], budget: Budget) {
        this.name = name;
        this.domain = domain;
        this.employees = employees;
        this.budget = budget;
    }

    calculateBalance(): number {
        return this.budget.debit - this.budget.credit;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
        this.budget.debit -= employee.salary;
    }

    hirePreHiredEmployee(preHired: PreHiredEmployee): Employee {
        const employee = new Employee(preHired.firstName, preHired.lastName, preHired.bankAccountNumber, preHired.salary, Status.ACTIVE, this);
        this.addEmployee(employee);
        return employee;
    }

    removeEmployee(employee: Employee) {
        this.employees = this.employees.filter(e => e !== employee);
        this.budget.credit += employee.salary;
    }

}
