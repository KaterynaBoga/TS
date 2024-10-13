import {Employee, Status} from "./Employee";
import {PreHiredEmployee} from "./PreHiredEmployee";

export enum DepartmentDomainEnum {
    ACCOUNTING = 'Accounting',
    HR = 'HR',
    IT = 'IT',
}

const ZERO_BUDGET_VALUE = 0;

export class Department {
    name: string;
    domain: DepartmentDomainEnum;
    employees: Employee[];
    budget: Budget = {
        debit: ZERO_BUDGET_VALUE,
        credit: ZERO_BUDGET_VALUE
    };

    constructor(name: string, domain: DepartmentDomainEnum, employees: Employee[], budget: Budget) {
        this.name = name;
        this.domain = domain;
        this.employees = employees;
        this.budget = budget;
    }

    calculateBalance(): number {
        return this.budget.debit - this.budget.credit;
    }

    addEmployee(newcomer: Employee | PreHiredEmployee): void {
        if (newcomer instanceof Employee) {
            this.employees.push(newcomer);
            this.budget.debit -= newcomer.salary;
        } else {
            const employee = new Employee(newcomer.firstName, newcomer.lastName, newcomer.bankAccountNumber, newcomer.salary, Status.ACTIVE, this);
            this.employees.push(employee);
            this.budget.debit -= employee.salary;
        }

    }

    hirePreHiredOrRegularEmployee(employeeOrPreHired: Employee | PreHiredEmployee): Employee {
        if (this.isPreHiredEmployee(employeeOrPreHired)) {
            const employee = new Employee(
                employeeOrPreHired.firstName,
                employeeOrPreHired.lastName,
                employeeOrPreHired.bankAccountNumber,
                employeeOrPreHired.salary,
                Status.ACTIVE,
                this
            );
            this.addEmployee(employee);
            return employee;
        } else {
            this.addEmployee(employeeOrPreHired);
            return employeeOrPreHired;
        }
    }

    private isPreHiredEmployee(employee: Employee | PreHiredEmployee): employee is PreHiredEmployee {
        return (employee as PreHiredEmployee).bankAccountNumber !== undefined;
    }

    removeEmployee(employee: Employee): void {
        this.employees = this.employees.filter(e => e !== employee);
        this.budget.credit += employee.salary;
    }

    salaryPayment(): void {}

    internalPayment(employee: Employee): void {}

    externalPayment(preHire: PreHiredEmployee): void {}

}
