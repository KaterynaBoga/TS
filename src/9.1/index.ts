// class User {
//     public name: string;
//     public age: number;
//
//     public constructor() {
//         this.name = "John";
//         this.age = 25;
//     }
// }
//
// class Admin {
//     public name: string;
//
//     public constructor() {
//         this.name = "Admin";
//     }
// }
//
// const user: User = new User();
// const admin: Admin = new Admin();
//
// const a: User = admin as User;
// const b: Admin = user as Admin;

// class User {
//     public login(userName: string, email: string): void;
//     public login(userName: string): void;
// }
//
// class Admin {
//     public login(userName: string, email: string): void;
// }
//
// declare let user: User;
// declare let admin: Admin;
//
// const a: User = admin;
// const b: Admin = user;

// class User {
//     public name: string;
//     public age?: number;
//
//     public login?(): void;
// }
//
// class Admin {
//     public name: string;
//     public hasAccess?: boolean;
//
//     public editUser?(): void;
// }
//
// declare let user: User;
// declare let admin: Admin;
//
// const a: User = admin;
// const b: Admin = user;


// class User {
//     public name: string;
//     public age?: number;
//
//     public constructor() {
//         this.name = "John";
//         this.age = 25;
//     }
// }
//
// class Admin {
//     public name: string;
//     public age: number;
//
//     public constructor() {
//         this.name = "Admin";
//         this.age = 30;
//     }
// }
//
// declare let user: User;
// declare let admin: Admin;
//
// const a: User = Admin;
// const b: Admin = user;
// const c: Admin = user as Admin;
//
// class IAnimal {
//     name?: string;
//     age?: number;
//
//     constructor() {
//         this.name = "Animal";
//         this.age = 0;
//     }
// }
//
// class Animal {}
// class Bird {
//     name: string;
//
//     constructor() {
//         this.name = "Bird";
//     }
// }
//
// class Fish {
//     age: number;
// }
//
// class Insect {
//     name: string;
//     isAlive: boolean;
// }
//
// class Reptile {
//     age: number;
//     isAlive: boolean;
// }
//
// class Worm {
//     isAlive: boolean;
// }
//
// declare const animal: Animal;
// declare const bird: Bird;
// declare const fish: Fish;
// declare const insect: Insect;
// declare const reptile: Reptile;
// declare const worm: Worm;
//
// const a: IAnimal = animal;
// const b: IAnimal = bird;
// const c: IAnimal = fish;
// const d: IAnimal = insect;
// const e: IAnimal = reptile;
// const f: IAnimal = worm;

// class User<T> {
//     public name: T;
// }
//
// class Admin<T, U> {
//     public name: T;
//     public age: U;
// }
//
// declare const userString: User<string>;
// declare const userNumber: User<number>;

// class User {
//     public login<T>(userName: T): void{};
// }
// class Admin {
//     public login<T, U>(userName: T, email: U): void{};
// }
//
// declare const user: User;
// declare const admin: Admin;
//
// const a: User = admin;
// const b: Admin = user;

// class User {
//     private name: string;
// }
//
// class Admin {
//     private name: string;
// }
//
// class Guest {
//     protected name: string;
// }
//
// class ReadOnlyUser {
//     public name: string;
// }
//
// declare const user: User;
// declare const admin: Admin;
// declare const guest: Guest;
// declare const readOnlyUser: ReadOnlyUser;
//
// const a: User = user;
// const b: Admin = admin;
// const c: Guest = guest;
// const d: ReadOnlyUser = user;

// class User {
//     protected name: string;
// }
// class Admin extends User {
//     protected declare name: string;
// }
//
// declare let user: User;
// declare let admin: Admin;
//
// const a: User = admin;
// const b: Admin = user;
// const c: Admin = user as Admin;

// class User {
//     public static readonly DEFAULT_NAME: string = "John";
//     constructor(name: string) {}
// }
//
// class Admin {
//     constructor(age: number) {}
//
//     public static toStringDecor(target: string): string {
//         return `[object ${target}]`;
//     }
// }
//
// declare let user: User;
// declare let admin: Admin;
// const a: User = admin;
// const b: Admin = user;

/////////////////////////////////////////////////

// class User {
//     public name: string;
// }
//
// class Admin {
//     public name: string;
//     public age: number;
// }
//
// class Guest {}

// const equal: User = new User();
// const more: Admin = new Admin();
// const less: Guest = new Guest();

// const equal: User = { name: "John" };
// const more: Admin = { name: "Admin", age: 30 };
// const less: Guest = {};
//
// interface IUser {
//     name: string;
// }

// const a: IUser = new User();
// const b: IUser = new Admin();
// const c: IUser = new Guest();
// const d: IUser = equal;
// const e: IUser = more;
// const f: IUser = less;
//
// const a: IUser = { name: "John" };
// const b: IUser = { name: "Admin", age: 30 };
// const c: IUser = {};
// const d: IUser = equal;
// const e: IUser = more;
// const f: IUser = less;
//
// function foo(p1: IUser): void {}

// foo(new User());
// foo(new Admin());
// foo(new Guest());

// foo({ name: "John" });
// foo({ name: "Admin", age: 30 });
// foo({});
//
// foo(equal);
// foo(more);
// foo(less);

////////////////////

// const any: any = 0;
// const number: number = any;

// interface Smaller {
//     a: number;
//     b: string;
// }
//
// interface Bigger {
//     a: number;
//     b: string;
//     c: boolean;
// }
//
// declare let small: Smaller;
// declare let big: Bigger;
//
// let a: Smaller = big;
// let b: Bigger = small;
//
// let s: Smaller = big;
// let b: Bigger = small;

// interface ISmaller {
//     a: number;
//     b: string;
// }
//
// interface IBigger {
//     a: number;
//     b: string;
//     c: boolean;
// }
//
// declare let small: ISmaller;
// declare let big: IBigger;
//
// let a: ISmaller = big;
// let b: IBigger = small;
//
// type Smaller = number | string;
// type Bigger = number | string | boolean;
//
// declare let small: Smaller;
// declare let big: Bigger;
//
// let sm: Smaller = big;
// let bg: Bigger = small;


//Функціональний тип

// type A = (a: number, b: string) => void;
// const a: A = (a: number, b: string) => {};
// const b: A = (a: number) => {};

// type A = (...rest: number[]) => void;

// type A = (a: number, b?: string) => void;
// const a: A = (a: number) => {};
// const b: A = (a: number, b: string) => {};
// const c: A = (a: number, b: boolean) => {};
//
// type A = (...rest: any[]) => void;
// type B = (p0: number, p1: string) => void;
//
// const a: A = (...rest) => {};
// const b: B = (a, b) => {};
//
// const c: A = b;
// const d: B = a;

// type A = (a: number, ...rest: any[]) => void;
// type B = (a: number, b: string) => void;
// type C = (a: string, b: string) => void;
//
// const a: A = (a, ...rest) => {};
// const b: B = (a, b) => {};
// const c: C = (a, b) => {};
//
// const d: A = b;
// const e: B = a;
// const f: C = b;
// const g: C = a;

// type A = (p0: number, p1: string) => void;
// type B = () => void;
//
// const a: A = () => {};
// const b: A = (p: number) => {};
// const c: B = (p?: number) => {};
// const d: B = (p: number) => {};

// type A = (param: number) => void;
//
// const a: A = param => {};
// const b: A = () => {};

// class User {
//     name: string;
// }
// class Admin extends User {}
// class Guest extends User{}
//
// const users: User[] = [new Admin(), new Guest()];
// const userNames: string[] = [];
//
// users.forEach((value, index, array)) => userNames.push(value.name);
// users.forEach(value =>userNames.push(value.name));


// function funcA<T>(a: T): void {}
// function funcB<T, U>(a: T, b: U): void {}
//
// type A = typeof funcA;
// type B = typeof funcB;
//
// const a: A = funcA;
// const b: B = funcB;

// function funcA<T>(a: T): void {}
// function funcB(a: number): void {}
//
// type A = typeof funcA;
// type B = typeof funcB;
//
// const a: A = funcB;
// const b: B = funcA;

// class A {
//     a: number;
// }
// class B {
//     a: number;
//     b: string;
// }
//
// // const a: A = new B();
// // const b: B = new A();
// // const c: B = new A() as B;
//
// function funcA(param: B): void {}
// function funcB(param: A): void {}
//
// const a: typeof funcA = funcB;
// const b: typeof funcB = funcA;

// class A {
//     a: number;
// }
//
// class B {
//     a: number;
//     b: string;
// }
//
// type FuncA = () => A;
// type FuncB = () => B;
//
// const a: FuncA = () => new B();
// const b: FuncB = () => new A();

// const a: void = null;
// const b: void = undefined;
//
// type T = () => void;
//
// const a: T = () => 0;
// const b: T = () => '';
// const c: T = () => true;
// const d: T = () => ({});
//
// class User {
//     constructor(public name: string) {}
// }
//
// const users: User[] = [new User("John"), new User("Alice")];
// const userNames: string[] = [];
//
// users.forEach(({name}) => userNames.push(name));

// function funcA<T>(param: T): T {
//     return param;
// }
//
// function funcB<T>(param: T): T {
//     return param;
// }
//
// type A = typeof funcA;
// type B = typeof funcB;
//
// const a: A = funcB;
// const b: B = funcA;

function funcA<T>(param: T): T {
    return param;
}

function funcB(param: number): number {
    return param;
}

type A = typeof funcA;
type B = typeof funcB;

const a: A = funcB;
const b: B = funcA;
