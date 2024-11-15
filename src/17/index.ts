// interface IBankClient {
//     readonly firstName: string;
//     readonly lastName: string;
// }
//
// class BankAAccount {
//     private readonly currency: string;
//     public readonly _number: number;
//     private balance = 0;
//     private _holderName: string;
//     private _convertStrategy: ICurrencyConverterStrategy;
//
//     constructor(client: IBankClient, currency: string, convertStrategy: ICurrencyConverterStrategy) {
//         this.currency = currency;
//         this.holderName = client;
//         this._number = Math.floor(Math.random() * 1000000000);
//         this._convertStrategy = convertStrategy;
//     }
//
//     public get number(): number {
//         return this._number;
//     }
//
//     public get balanceInfo(): string {
//         return `Current balance: ${this.balance} ${this.currency}`;
//     }
//
//     public get holderName(): string {
//         return this._holderName;
//     }
//
//     public set holderName(value: string) {
//         this._holderName = value;
//     }
//
//     public deposit(amount: number): void {
//         this.balance += amount;
//     }
//
//     public withdraw(amount: number): void {
//         if (this.balance < amount) throw new Error('Insufficient funds');
//         this.balance -= amount;
//     }
//
//     public makeTransaction(amount: number, targetCurrency: CurrencyTypeEnum): void {
//         const convertedAmount = this._convertStrategy.convert(amount, targetCurrency);
//         this.balance -= convertedAmount;
//     }
//
//     consoleLog(): void {
//         console.log(`Account number: ${this.number}`);
//         console.log(`Holder name: ${this.holderName}`);
//         console.log(`Balance: ${this.balance}`);
//     }
// }
//
// enum CurrencyTypeEnum {
//     USD = 'USD',
//     EUR = 'EUR',
//     GBP = 'GBP',
// }
//
// type CurrencyRate = Record<CurrencyTypeEnum, number>
//
// interface ICurrencyConverterStrategy {
//     convert(amount: number, currency: CurrencyTypeEnum): number
// }
//
// class CurrentRateCurrencyConverterStrategy implements ICurrencyConverterStrategy {
//     private readonly exchangeRates: CurrencyRate
//
//     constructor(exchangeRates: CurrencyRate) {
//         this.exchangeRates = exchangeRates
//     }
//
//     public convert(amount: number, currency: CurrencyTypeEnum): number {
//         const rate = this.exchangeRates[currency];
//         if (!rate) throw new Error('Unsupported currency');
//         return amount * rate;
//     }
// }
//
// class FixedRateCurrencyConverterStrategy implements ICurrencyConverterStrategy {
//     private readonly fixedRate: number
//
//     constructor(fixedRate: number) {
//         this.fixedRate = fixedRate
//     }
//
//     public convert(amount: number, currency: CurrencyTypeEnum): number {
//         return amount * this.fixedRate
//     }
// }
//
// const exchangeRates = {
//     [CurrencyTypeEnum.USD]: 1,
//     [CurrencyTypeEnum.EUR]: 0.85,
//     [CurrencyTypeEnum.GBP]: 0.75,
// }
//
// const currentRateStrategy = new CurrentRateCurrencyConverterStrategy(exchangeRates);
// const fixedRateStrategy = new FixedRateCurrencyConverterStrategy(0.8);
//
// const accountWithCurrentRate = new BankAAccount({ firstName: 'John', lastName: 'Doe' }, CurrencyTypeEnum.USD, currentRateStrategy);
//
// const accountWithFixedRate = new BankAAccount({ firstName: 'John', lastName: 'Doe' }, CurrencyTypeEnum.USD, fixedRateStrategy);
//


//Observer
// interface IObservable {
//     attach(observer: IObserver): void;
//
//     detach(observer: IObserver): void;
//
//     notify(): void;
// }
//
// interface IObserver {
//     update(observable: IObservable): void
// }
//
// abstract class Observable implements IObservable {
//     private observers: IObserver[] = [];
//
//
//     public attach(observer: IObserver): void {
//         const isExist = this.observers.includes(observer);
//         if (isExist) return console.log('Subject: Observer has been attached already.');
//         this.observers.push(observer);
//     }
//
//     public detach(observer: IObserver): void {
//         const observerIndex = this.observers.indexOf(observer);
//         if (~observerIndex) return console.log('Subject: Nonexistent observer.');
//         this.observers.splice(observerIndex, 1);
//         console.log('Subject: Detached an observer.');
//     }
//
//     public notify(): void {
//         console.log('Subject: Notifying observers...');
//         for (const observer of this.observers) {
//             observer.update(this);
//         }
//     }
// }
//
// class ConcreteObservable extends Observable {
//     public _state: 0;
//
//     public get state(): number {
//         return this._state;
//     }
//
//     public someBusinessLogic(): void {
//         console.log('\nSubject: I\'m doing something important.');
//         this._state = Math.floor(Math.random() * (10 + 1));
//
//         this.notify();
//         console.log('Subject: I\'ve just done something important.');
//     }
// }
//
// class ObserverA implements IObserver {
//     public update(observable: IObservable): void {
//         if (observable instanceof ConcreteObservable && observable.state < 3) {
//             console.log('ObserverA: Reacted to the event.');
//         }
//     }
// }
//
// class ObserverB implements IObserver {
//     public update(observable: IObservable): void {
//         if (observable instanceof ConcreteObservable && (observable.state === 0 || observable.state >= 2)) {
//             console.log('ObserverB: Reacted to the event.');
//         }
//     }
// }
//
// const observable = new ConcreteObservable();
//
// const observer1 = new ObserverA();
// observable.attach(observer1);
//
// const observer2 = new ObserverB();
// observable.attach(observer2);
//
// observable.someBusinessLogic()
// observable.someBusinessLogic()
//
// observable.detach(observer2)
//
// observable.someBusinessLogic()

interface IObservable {
    attach(observer: IObserver): void;

    detach(observer: IObserver): void;

    notify(): void;
}

interface IObserver {
    update(observable: IObservable): void
}

abstract class Observable implements IObservable {
    private observers: IObserver[] = [];


    public attach(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) return console.log('Subject: Observer has been attached already.');
        this.observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (~observerIndex) return console.log('Subject: Nonexistent observer.');
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class BankAccount extends Observable {
    // ...
    public makeTransaction(amount: number, targetCurrency: CurrencyTypeEnum): void {
        // ...
        this.notify();
    }
}

class SMSNotification implements IObserver {
    update(account: BankAccount): void {
        console.log(`SMS notification: Your account balance has changed. Current balance: ${account.balanceInfo}`);
    }
}

class EmailNotification implements IObserver {
    update(account: BankAccount): void {
        console.log(`Email notification: Your account balance has changed. Current balance: ${account.balanceInfo}`);
    }
}

class PushNotification implements IObserver {
    update(account: BankAccount): void {
        console.log(`Push notification: Your account balance has changed. Current balance: ${account.balanceInfo}`);
    }
}


