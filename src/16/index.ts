// class SubsystemA {
//     public operation1(): string {
//         return 'SubsystemA: Ready!\n';
//     }
//
//     public operationN(): string {
//         return 'SubsystemA: Go!\n';
//     }
// }
//
// class SubsystemB {
//     public operation1(): string {
//         return 'SubsystemB: Get ready!\n';
//     }
//
//     public operationZ(): string {
//         return 'SubsystemB: Fire!\n';
//     }
// }
//
// class Facade {
//     private readonly subsystemA: SubsystemA;
//     private readonly subsystemB: SubsystemB;
//
//     constructor(subsystemA: SubsystemA, subsystemB: SubsystemB) {
//         this.subsystemA = subsystemA;
//         this.subsystemB = subsystemB;
//     }
//
//     public operation(): string {
//         let result = 'Facade initializes subsystems:\n';
//         result += this.subsystemA.operation1();
//         result += this.subsystemB.operation1();
//         result += 'Facade orders subsystems to perform the action:\n';
//         result += this.subsystemA.operationN();
//         result += this.subsystemB.operationZ();
//         return result;
//     }
// }
//
// function clientCode(facade: Facade): void {
//     console.log(facade.operation());
// }
//
// const subsystemA = new SubsystemA();
// const subsystemB = new SubsystemB();
//
// const facade = new Facade(subsystemA, subsystemB);
// clientCode(facade);

interface IBankClient {
    readonly firstName: string;
    readonly lastName: string;
}

class BankClient implements IBankClient {
    private readonly _age: number;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private _accountNumber: number | null;
    constructor(
        public firstName: string,
        public lastName: string,
        age: number,
        accountNumber?: number | null
    ) {}

    public get accountNumber(): number | null {
        if (!this._accountNumber) throw new Error('Account number is not set');
        return this._accountNumber;
    }

    public set accountNumber(value: number | null) {
        this._accountNumber = value;
    }

    public get age(): number {
        return this._age;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
}

class BankAccount1 {
    private readonly currency: string;
    public number: number;
    private balance = 0;
    private _holderName: string | undefined;

    constructor(client: IBankClient, currency: string) {
        this.currency = currency;
        this.holderName = client;
        this.number = Math.floor(Math.random() * 1000000000);
    }

    public get balanceInfo(): string {
        return `Current balance: ${this.balance} ${this.currency}`;
    }

    public get holderName(): string {
        return <string>this._holderName;
    }

    public set holderName({firstName, lastName}: IBankClient) {
        if (!firstName.trim()) throw new Error('First name cannot be empty');
        if (!lastName.trim()) throw new Error('Last name cannot be empty');
        this._holderName = `${firstName} ${lastName}`;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        this.balance -= amount;
    }
}

class SalaryDataProvider {
    public getAnnualSalary(client: IBankClient): number {
        return Math.floor(Math.random() * 100000);
    }
}

class CreditHistoryProvider {
    public getCreditHistory(client: IBankClient): number {
        return 2;
    }
}

class Bank {
    private readonly accounts: Record<number, BankAccount1>;
    private readonly salaryDataProvider: SalaryDataProvider;
    private readonly creditHistoryProvider: CreditHistoryProvider;

    constructor(salaryDataProvider: SalaryDataProvider, creditHistoryProvider: CreditHistoryProvider) {
        this.accounts = {};
        this.salaryDataProvider = salaryDataProvider;
        this.creditHistoryProvider = creditHistoryProvider;
    }

    public addAccount(client: BankClient): void {
        const account = new BankAccount1(client, 'USD');
        client.accountNumber = account.number;
        this.accounts[account.number] = account;
    }

    public deposit(client: BankClient, amount: number): void {
        const account = this.getAccount(client);
        account.deposit(amount);
    }

    public withdraw(client: BankClient, amount: number): void {
        const account = this.getAccount(client);
        account.withdraw(amount);
    }

    public getBalance(client: BankClient): string {
        const account = this.getAccount(client);
        return account.balanceInfo;
    }

    public getCreditDecision(client: BankClient, amount: number, duration: number): boolean {
        const salary = this.salaryDataProvider.getAnnualSalary(client);
        const creditHistory = this.creditHistoryProvider.getCreditHistory(client);

        return true;
    }

    private getAccount(client: BankClient): BankAccount1 {
        return this.accounts[client.accountNumber];

    }
}

