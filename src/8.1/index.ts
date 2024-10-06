// Generic

// type, interface, class, function, method

// T, U, V, S/W
// interface IType<T, U> {
//     name: T;
//     age: U;
// }
//
// const value: IType<string, number> = {
//     name: 'name',
//     age: 1,
// };
//
// const foo: Array<number> = [1, 2, 3];

// K - key, V - value
// P - property
// Z - this
// Request, Response
// TResponse, TRequest

// interface User<UserID, UserBday> {
//     id: UserID;
//     birthDate: UserBday;
// }

// type Identifier<T> = {}

// interface IIdentifier<T> {}

// class Identifier<T> {
//     public identifier<T>(): void{}
// }
//
// const identifier = class<T> {};
//
// function fn<T>(): void {};
//
// const identifier = function <T>(): void {};
//
// const identifier = <T>() => {};

// type Type<T> = {
//     prop: T;
// };
//
// function f<T>(param: T): T {
//     let x: T;
//     return x;
// }

// interface Identifier<T> { prop: T; }
//
// class T<T> {
//     public f: T;
// }
//
// interface IIdentifier<T> {}
// class IdentifierA<T> {}
// class IdentifierB<T> extends IdentifierA<string> implements IIdentifier<string>{}
// class IdentifierC<T> extends IdentifierA<T> implements IIdentifier<number>{}
//
// class User<T> {
//     public name!: T;
//     constructor(readonly id: string) {}
//
// }
//
// const admin: User<string> = new User('admin');
// admin.name = 'John';
// const user = new User<string>('admin');
// user.name = 'John';
// const customer = new User('customer');
// customer.name = 'John';
//
// function action<T>(value?: T): T | undefined {
//     return value;
// }
//
// action<string>('0');
// action('0');
// action();
//

// type ReturnParam<T, U> = {a: T, b: U};
//
// class GenericClass<T, U> {
//     public defaultMethod(a: T, b: U): ReturnParam<T, U> {
//         return {a, b};
//     }
//     public genericMethodA<T, U>(a: T, b: U): ReturnParam<T, U> {
//         return {a, b};
//     }
//     public genericMethodB(a: T, b: U): ReturnParam<T, U> {
//         return {a, b};
//     }
// }
//
// const generic: GenericClass<string, number> = new GenericClass();
//
// generic.defaultMethod('a', 1);
// generic.genericMethodA<boolean, bigint>(true, 42n);
// generic.genericMethodB<boolean>(true, 42);

// interface CustomConstructor<T> {
//     new(): T;
// }
//
// class A<T extends CustomConstructor<T>> {
//     public getNewInstance(): T {
//         return new T();
//     }
// }

// type TypeA = {};
// type TypeA<T> = {};
//
// class ClassA{};
// class ClassA<T>{};

// class A<T extends number> {}
// Naked type constraint

// class A<T extends number, U extends T> {}
// class B<U extends T, T extends number> {}

// class Colletion<T extends IName> {
//     private items: T[] = [];
//
//     public add(item: T): void {
//         this.items.push(item);
//     }
//
//     public get(name: string): T | undefined {
//         return this.items.find((item) => item.name === name);
//     }
// }
//
// interface IName {
//     name: string;
// }
//
// class User implements IName {
//     constructor(readonly name: string) {}
// }
//
// class Admin implements IName {
//     constructor(readonly name: string) {}
// }
//
// const userCollection: Colletion<User> = new Colletion();
// userCollection.add(new User('John'));
// userCollection.add(new User('Ann'));
//
// const user = userCollection.get('John');
// const adminCollection: Colletion<Admin> = new Colletion();


// interface IBird {
//     fly(): void;
// }
//
// interface IFish {
//     swim(): void;
// }
//
// interface IDuck extends IBird, IFish {}
//
// interface IFly<T extends IBird>
//
// let a: IFly<IBird>
// let a: IFly<IDuck>
// let a: IFly<IFish>
//
// interface IUser {
//     name: string;
//     age: number;
// }
//
// let user: IUser;
//
// class A<T extends typeof user> {}
// class B<T extends number | string, U extends number> {}
// class C<T extends keyof IUser> {}
// class D<T extends IUser[K], K extends keyof IUser> {}
//
// class E<T extends any> {
//     private field: any = {};
//     private genericField: T = {};
//
//     constructor() {
//         this.field.notExistMethod();
//         this.genericField.notExistMethod();
//     }
// }

// class A<T = string> {}
// class B<U, T = string> {}
//
// // function fn(a, b = 50) {}
// // function fn1(a = 50, b) {}
//
// class C extends B<string, string> {}

// class A<T = number, U = T> {}
// class B<T extends number, U = T> {}
// class C<T extends number = number> {}

// class User {
//     public name: string;
// }
//
// class Admin extends User {
//     public getAccess(): boolean {
//         return true;
//     }
// }
//
// let admin: User = new Admin();
// let user: Admin = new User();
//
// class A<T extends User = Admin> {}
// class B<T extends Admin = User> {}

// function fnA<T>(param: any): T {
//     return param;
// }
// function fnB<T>(param: never): T {
//     return param;
// }
// function fnC<T>(param: T): T {
//     return param;
// }

interface IName {
    name: string;
}

interface IUser extends IName {}

abstract class User implements IUser {
    constructor(readonly name: string) {}
}

class Guest extends User {}
class Admin extends User {}
class Collection<T extends IName> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public get<U extends T>(name: string): U {
        return this.items.find((item) => item.name === name) as U;
    }
}

const collection: Collection<Guest | Admin> = new Collection();
collection.add(new Guest('John'));
collection.add(new Admin('Ann'));

const guestA: Guest = collection.get('John');
const guestB: Guest = collection.get<Guest>('John');
const guestC = collection.get('John');

class Identifier<T> {
    array: T[] = [];

    method<T>(param: T): void {
        this.array.push(param);
    }
}


