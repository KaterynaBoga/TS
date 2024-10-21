import {Department} from "./Department";
import {PreHiredEmployee} from "./PreHiredEmployee";
import {Employee} from "./Employee";

export class Company {
    name: string = 'Company';
    departments: Department[] = [];
    preHiredStaff: PreHiredEmployee[] = [];

    constructor(name: string, departments: Department[], preHiredStaff: PreHiredEmployee[]) {
        this.name = name;
        this.departments = departments;
        this.preHiredStaff = preHiredStaff;
    }

    get allStaff(): (Employee | PreHiredEmployee)[] {
        return [...this.departments.flatMap(d => d.employees), ...this.preHiredStaff];
    }
}
