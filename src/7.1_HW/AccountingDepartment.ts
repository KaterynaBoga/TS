import { Department } from './Department';
import { Status } from './Employee';

export class AccountingDepartment extends Department {
  balance: number;

  constructor(budget: Budget) {
    super('John', 'Accounting', [], budget);
    this.balance = this.calculateBalance();
  }

  addToBalance(amount: number) {
    this.balance += amount;
  }

  removeFromBalance(amount: number) {
    this.balance -= amount;
  }

  paySalaries() {
    this.employees.forEach(employee => {
      if (employee.status === Status.ACTIVE) {
        this.removeFromBalance(employee.salary);
      }
    });
  }
}
