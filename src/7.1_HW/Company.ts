import {Department} from "./Department";
import {PreHiredEmployee} from "./PreHiredEmployee";
import {Employee} from "./Employee";

export class Company {
    name: string;
    departments: Department[] = [];
    preHiredStaff: PreHiredEmployee[];
    allStaff: Employee[];

    constructor(name: string, departments: Department[], preHiredStaff: PreHiredEmployee[], allStaff: Employee[]) {
        this.name = name;
        this.departments = departments;
        this.preHiredStaff = preHiredStaff;
        this.allStaff = allStaff;
    }
}
