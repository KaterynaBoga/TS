// // class Car {
// //     private readonly engine: Engine;
// //     constructor(engine: Engine) {
// //         this.engine = engine;
// //     }
// //
// //     public start(): void {
// //         this.engine.turnOn();
// //     }
// // }
//
// // class Engine {
// //     public turnOn(): void {
// //         console.log('Engine is on');
// //     }
// // }
//
// // class Person {
// //     private readonly car: Car;
// //     constructor(car: Car) {
// //         this.car = car;
// //         car.setOwner(this);
// //     }
// // }
// //
// // class Car {
// //   private owner: Person | undefined;
// //
// //   public setOwner(owner: Person): void {
// //     this.owner = owner;
// //   }
// // }
//
// // class Engine {
// //     private readonly model: string;
// //
// //     constructor(model: string) {
// //         this.model = model;
// //     }
// //
// //     public start(): void {
// //         console.log(`Engine ${this.model} is on`);
// //     }
// // }
// //
// // class Car {
// //     private readonly engine: Engine;
// //
// //     constructor(engineModel: string) {
// //         this.engine = new Engine(engineModel);
// //     }
// //     public start(): void {
// //         console.log('Car is starting');
// //         this.engine.start();
// //     }
// // }
// //
// // const myCar = new Car('V8');
// // myCar.start();
// //
// // class Engine {
// //     private readonly model: string;
// //
// //     constructor(model: string) {
// //         this.model = model;
// //     }
// //
// //     public start(): void {
// //         console.log(`Engine ${this.model} is on`);
// //     }
// // }
// //
// // class Car {
// //   private engine: Engine | null;
// //
// //   public assignEngine(engine: Engine): void {
// //     this.engine = engine;
// //   }
// //
// //   public start(): void {
// //     console.log('Car is starting');
// //     if (!this.engine) throw new Error('Engine is not assigned');
// //     this.engine.start();
// //   }
// // }
//
// // DRY - Don't Repeat Yourself && WET - We Enjoy Typing
//
// // KISS - Keep It Simple, Stupid
//
// // function complexAverage(numbers: number[]): number {
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++) {
// //         sum += numbers[i];
// //     }
// //
// //     const average = sum / numbers.length;
// //
// //     return average;
// // }
// //
// // function simpleAverage(numbers: number[]): number {
// //     const sum = numbers.reduce((acc, number) => acc + number, 0);
// //     return sum / numbers.length;
// // }
// //
//
// // YAGNI - You Ain't Gonna Need It
//
// // interface IItem {
// //     readonly id: number;
// //     readonly price: number;
// // }
// //
// // class Order {
// //     private readonly customerName: string;
// //     private readonly id: number;
// //     private items: IItem[];
// //     constructor(id: number, customer: string) {
// //         this.id = id;
// //         this.customerName = customer;
// //     }
// //
// //     public addItem(item: IItem): void {
// //         this.items.push(item);
// //     }
// //
// //     public removeItem(itemId: number): void {
// //         this.items = this.items.filter(item => item.id !== itemId);
// //     }
// //     public calculateTotal(): number {
// //         return this.items.reduce((total, item) => total + item.price, 0);
// //     }
//
// // SOLID
// // Single Responsibility Principle
//
// // interface ITransactionRecord {
// //     readonly transactionType: TransactionTypeEnum;
// //     readonly amount: number;
// // }
// //
// // enum TransactionTypeEnum {
// //     DEPOSIT = 'DEPOSIT',
// //     WITHDRAW = 'WITHDRAW',
// // }
// //
// // class TransactionHistory {
// //     private readonly transactions: ITransactionRecord[] = [];
// //     public addTransaction(transaction: ITransactionRecord): void {
// //         this.transactions.push(transaction);
// //     }
// //
// //     public showHistory(): void {
// //         this.transactions.forEach(transaction => console.log(transaction));
// //     }
// // }
// //
// // interface IBankClient {
// //     readonly firstName: string;
// //     readonly lastName: string;
// // }
//
// // class BankAccount {
// //   private readonly currency: string;
// //   private readonly number: number;
// //     private readonly transactionHistory: TransactionHistory;
// //   private balance = 0;
// //   private _holderName: string | undefined;
// //
// //   constructor(client: IBankClient, currency: string) {
// //     this.currency = currency;
// //     this.holderName = client;
// //     this.number = Math.floor(Math.random() * 1000000000);
// //     this.transactionHistory = new TransactionHistory();
// //   }
// //
// //   public get balanceInfo(): string {
// //     return `Current balance: ${this.balance} ${this.currency}`;
// //   }
// //
// //   public get holderName(): string {
// //     return <string>this._holderName;
// //   }
// //
// //   public set holderName({ firstName, lastName }: IBankClient) {
// //     this._holderName = `${firstName} ${lastName}`;
// //   }
// //
// //   public deposit(amount: number): void {
// //     this.balance += amount;
// //     this.recordTransaction(TransactionTypeEnum.DEPOSIT, amount);
// //   }
// //
// //   public withdraw(amount: number): void {
// //     this.balance -= amount;
// //     this.recordTransaction(TransactionTypeEnum.WITHDRAW, amount);
// //   }
// //
// //   private recordTransaction(transactionType: TransactionTypeEnum, amount: number): void {
// //     const transaction: ITransactionRecord = {
// //         transactionType,
// //         amount,
// //     }
// //     this.transactionHistory.addTransaction(transaction);
// //   }
// // }
//
// // Open/Closed Principle
// // Liskov Substitution Principle
// // Interface Segregation Principle
// // Dependency Inversion Principle
//
// interface ITransactionRecord {
//     readonly transactionType: TransactionTypeEnum;
//     readonly amount: number;
// }
//
// enum TransactionTypeEnum {
//     DEPOSIT = 'DEPOSIT',
//     WITHDRAW = 'WITHDRAW',
//     STOCK = 'STOCK',
// }
//
// class TransactionHistory {
//     private readonly transactions: ITransactionRecord[] = [];
//     public addTransaction(transaction: ITransactionRecord): void {
//         this.transactions.push(transaction);
//     }
//
//     public showHistory(): void {
//         this.transactions.forEach(transaction => console.log(transaction));
//     }
// }
//
// interface IBankClient {
//     readonly firstName: string;
//     readonly lastName: string;
// }
//
// interface IAccount {
//     get balanceInfo(): string;
//     deposit(amount: number): void;
//     withdraw(amount: number): void;
// }
//
// abstract class BaseBankAccount {
//
//     private readonly currency: string;
//     private readonly number: number;
//     private readonly transactionHistory: TransactionHistory;
//     private balance = 0;
//     private _holderName: string | undefined;
//
//     constructor(client: IBankClient, currency: string) {
//         this.currency = currency;
//         this.holderName = client;
//         this.number = Math.floor(Math.random() * 1000000000);
//         this.transactionHistory = new TransactionHistory();
//     }
//
//     public get balanceInfo(): string {
//         return `Current balance: ${this.balance} ${this.currency}`;
//     }
//
//     public get holderName(): string {
//         return <string>this._holderName;
//     }
//
//     public set holderName({ firstName, lastName }: IBankClient) {
//         this._holderName = `${firstName} ${lastName}`;
//     }
//
//     public deposit(amount: number): void {
//         this.balance += amount;
//         this.recordTransaction(TransactionTypeEnum.DEPOSIT, amount);
//     }
//
//     public withdraw(amount: number): void {
//         this.balance -= amount;
//         this.recordTransaction(TransactionTypeEnum.WITHDRAW, amount);
//     }
//
//     private recordTransaction(transactionType: TransactionTypeEnum, amount: number): void {
//         const transaction: ITransactionRecord = {
//             transactionType,
//             amount,
//         }
//         this.transactionHistory.addTransaction(transaction);
//     }
//
// }
//
// class BankAccount extends BaseBankAccount implements IAccount {
//   public withdraw(amount: number) {
//       this.balanceInfo -= amount;
//       this.recordTransaction(TransactionTypeEnum.WITHDRAW, amount);
//   }
// }
//
// class InvestmentAccount extends BankAccount {
//   constructor(client: IBankClient, currency: string) {
//     super(client, currency);
//   }
//
//   public override withdraw(amount: number): never {
//     throw new Error('Withdraw is not allowed for investment account');
//   }
//
//   public buyStock(name: string, price: number): void {
//       if(this.balance < price) {
//         throw new Error('Not enough funds');
//       }
//       this.balance -= price;
//         this.recordTransaction(TransactionTypeEnum.STOCK, price);
//     }
// }
//
// const bankAccount = new BankAccount({ firstName: 'John', lastName: 'Doe' }, 'USD');
// const investment = new InvestmentAccount({ firstName: 'John', lastName: 'Doe' }, 'USD');
//
// function processAccount(account: BankAccount, amount: number): void {
//   account.deposit(100);
//   account.withdraw(50);
//   console.log(account.balanceInfo);
// }
//
// processAccount(bankAccount, 100);
// console.log('Investment account');
// processAccount(investment, 100);
// investment.buyStock('AAPL', 100);
// console.log(investment.balanceInfo);
//
// interface IPaymentSystem {
//     get name(): string;
// }
//
//
