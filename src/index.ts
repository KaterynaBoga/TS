// import 'reflect-metadata';
//
// const METADATA_KEY = Symbol('MinMax');
//
// class Rocket {
//   private tankVolume = 0;
//
//   @FuelLimit(0, 100)
//   public fueling(@MinMax value: number): void {
//     this.tankVolume = value;
//   }
// }
//
// const rocket = new Rocket();
// rocket.fueling(110);
//
// function MinMax(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//   const limitedParameters = Reflect.getOwnMetadata(METADATA_KEY, target, propertyKey, parameterIndex) || [];
//   limitedParameters.push(parameterIndex);
//   Reflect.defineMetadata(METADATA_KEY, limitedParameters, target, propertyKey);
// }
//
// function FuelLimit(min: number, max: number) {
//   return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//     const oldMethod = descriptor.value;
//
//     descriptor.value = function (...args: any[]) {
//       const limitedParameters = Reflect.getOwnMetadata(METADATA_KEY, target, propertyKey) || [];
//
//       for (let index of limitedParameters) {
//         const param = args[index];
//         if (param < min) throw new Error(`${param} is less than ${min}`);
//       }
//
//       return oldMethod.apply(this, args);
//     };
//   };
// }
//
// class Movies {
//   public movies: string[] = [];
//   private filters = {};
//   public applyFilters() {}
//   public applySearch(): string[] {
//     return [''];
//   };
//   public getMoviesByYear(years: number) {}
// }
//
// const movies = new Movies();
// movies.applyFilters();
// movies.applySearch();
//
// movies.getMoviesByYear(1991)
//
// enum GridFilterTypeEnum {}
// type GridFilerValue<T> = {
//     type: GridFilterTypeEnum;
//     filter: Extract<T, string | number>;
//     filterTo?: Extract<T, string | number>;
//     };
//
// type GridFilterSetValues<T> = {
//   values: T[];
// }

///////////OOP

interface IBankClient {
    readonly firstName: string;
    readonly lastName: string;
}

abstract class BaseAccount {
    private readonly currency: string;
    private _holderName: string;
    private readonly number: string;
    protected balance = 0;

    constructor(client: IBankClient, currency: string) {
        this.currency = currency;
        this.holderName = client;
    }

    public get balanceInfo(): string {
        return `${this.currency} ${this.balance}`;
    }

    public get holderName(): string {
      return this.holderName;
    }

    public set holderName({firstName, lastName}: IBankClient) {
        if (!firstName || !lastName) {
            throw new Error('Invalid name');
        }
        this._holderName = `${firstName} ${lastName}`;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public showAccountInfo(): void {
        console.log(`Holder: ${this.holderName}, Balance: ${this.balanceInfo}`);
    }

    abstract withdraw(amount: number): void;
}

class BankAccount  extends BaseAccount {
  public withdraw(amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }
}



class SavingsAccount extends BankAccount {
    private readonly interestRate: number;

    constructor(client: IBankClient, currency: string, interestRate: number) {
      super(client, currency);
      this.interestRate = interestRate;
    }

    public calculateInterest(): number {
        return this.balance * (this.interestRate / 100);
    }

    public withdraw(amount: number): void {
        if (this.balance - amount < 0) {
            throw new Error('Insufficient funds');
        }
        super.withdraw(amount);
    }

    public showAccountInfo(): void {
      console.log(`Holder: ${this.holderName}, Balance: ${this.balanceInfo}, Interest rate: ${this.interestRate}`);
    }
}

class CheckingAccount extends BankAccount {
    private readonly overdraftLimit: number;

    constructor(client: IBankClient, currency: string, fee: number) {
      super(client, currency);
      this.overdraftLimit = fee;
    }

    public withdraw(amount: number): void {
        if (this.balance - amount < 0) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount + this.overdraftLimit;
    }

    public showAccountInfo(): void {
      console.log(`Holder: ${this.holderName}, Balance: ${this.balanceInfo}, Fee: ${this.overdraftLimit}`);
    }
}

const savingsAccount = new SavingsAccount({firstName: 'John', lastName: 'Doe'}, 'USD', 5);
const checkingAccount = new CheckingAccount({firstName: 'Kate', lastName: 'White'}, 'UAH', 10);
const accounts: BaseAccount[] = [savingsAccount, checkingAccount];

accounts.forEach(account => {
    account.deposit(1000);
    account.withdraw(100);
    account.showAccountInfo();
});

class Customer {
  private readonly account: BaseAccount[] = [];

  constructor(private readonly firstName: string) {}

  public addAccount(account: BaseAccount): void {
    this.account.push(account);
  }

  public depositToAllAccount(amount: number): void {
    this.account.forEach(account => account.deposit(amount));
  }

  public showAllAccountsInfo(): void {
    this.account.forEach(account => account.showAccountInfo());
  }
}

