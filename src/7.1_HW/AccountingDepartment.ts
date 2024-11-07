import {Department, DepartmentDomainEnum} from './Department';
import {Employee, Status} from './Employee';
import {PreHiredEmployee} from "./PreHiredEmployee";

export class AccountingDepartment extends Department {
  balance: (Department | Employee | PreHiredEmployee)[] = [];

  constructor(name: string, domain: DepartmentDomainEnum) {
    super(name, domain, [], {debit: 0, credit: 0});
  }

  addToBalance(entity: Department | Employee | PreHiredEmployee): void {
    if (entity instanceof Department) {
      this.balance.push(...entity.employees);
    } else {
      this.balance.push(entity);
    }
  }

  removeFromBalance(entity: Department | Employee): void {}

  paySalaries(): void {
    for (const entity of this.balance) {
      if (entity instanceof PreHiredEmployee) {
        this.externalPayment(entity);
      } else if (entity instanceof Employee) {
        this.internalPayment(entity);
      } else {
        for (const employee of entity.employees) {
          this.internalPayment(employee);
        }
      }
    }
  }
}
