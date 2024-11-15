// interface IBankClient {
//     readonly firstName: string;
//     readonly lastName: string;
// }
//
// interface IAccount {
//     get balanceInfo(): string;
//     makePayment(amount: number, paymentSystem: PaymentSystemEnum): void;
// }
//
// interface IDepositable {
//     deposit(amount: number): void;
// }
//
// interface IWithdrawable {
//     withdraw(amount: number): void;
// }
//
// interface IPaymentSystem {
//     get name(): string;
//     makePayment(amount: number): void;
// }
//
// class BaseBankAccount1 implements IAccount, IDepositable, IWithdrawable {
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
//     public makePayment(amount: number, paymentSystem: PaymentSystemEnum): void {
//         console.log(`Payment of ${amount} made using ${paymentSystem}`);
//     }
//
// }
//
// class BankAccount1 extends  {
//
// }
//
// class PayPalPaymentSystem implements IPaymentSystem {
//     private readonly _name: PaymentSystemEnum.PAYPAL;
//     private readonly email: string;
//
//     constructor(email: string, name: PaymentSystemEnum.PAYPAL) {
//         this.email = email;
//         this._name = name;
//     }
//
//     get name(): PaymentSystemEnum {
//         return this._name;
//     }
//
//     makePayment(amount: number): void {
//         console.log(`Payment of ${amount} made using ${this._name}`);
//     }
// }
//
// class StripePaymentSystem implements IPaymentSystem {
//     private readonly _name: PaymentSystemEnum.STRIPE;
//     private readonly cardNumber: string
//
//     constructor(cardNumber: string) {
//         this.cardNumber = cardNumber;
//     }
//
//     get name(): PaymentSystemEnum {
//         return this._name;
//     }
//
//     makePayment(amount: number): void {
//         console.log(`Payment of ${amount} made using ${this._name} with card number ${this.cardNumber}`);
//     }
// }
//
// const paypalPaymentSystem = new PayPalPaymentSystem('email', PaymentSystemEnum.PAYPAL);
// const stripePaymentSystem = new StripePaymentSystem('cardNumber');
//
// const bankAccount = new BankAccount({ firstName: 'John', lastName: 'Doe' }, 'USD');
// bankAccount.makePayment(100, paypalPaymentSystem);
// bankAccount.makePayment(100, stripePaymentSystem);
//
// class Transaction {
//     private readonly account: BankAccount;
//     constructor(account: BankAccount) {
//         this.account = account;
//     }
//
//     public deposit(amount: number): void {
//         this.account.balance += amount;
//     }
//
//     public withdraw(amount: number): void {
//         this.account.balance -= amount;
//     }
// }
//
//
//
// // Coupling && Cohesion
// // Low coupling
// // high coupling
//
// // High cohesion
// // low cohesion
