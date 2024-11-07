import {Department} from "./Department";

export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ON_VACATION = 'on vacation'
}

export class Employee {
    firstName: string;
    lastName: string;
    bankAccountNumber: string;
    salary: number;
    status: Status;
    department: Department;

    constructor(firstName: string, lastName: string, bankAccountNumber: string, salary: number, status: Status.ACTIVE, department: Department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccountNumber = bankAccountNumber;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
}
