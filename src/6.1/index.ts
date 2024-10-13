//Index signature
//{[indetifier: Type]: Type}

// interface Indetifier {
//     [indetifier: string]: string;
// }
//
// interface Indetifier {
//     [indetifier: symbol]: string;
// }
//
// interface Indetifier {
//     [indetifier: number]: string;
// }

// interface A {
//     [key: string]: string;
//     [key: symbol]: string;
//     [key: number]: string;
// }

// const a: A = {
//     validKey: 'value',
//     1: 'value',
//     [Symbol('key')]: 'value',
// }

class SuperClass {
    a: number;
}

class SubClass extends SuperClass {
    b: number;
}

// interface D {
//     [indetifier: string]: SuperClass;
//     [indetifier: number]: SubClass;
// }

const d: D = {
}

d['dynamicKey'] = new SubClass();

d[0] = new SubClass();

// interface E {
//     [indetifier: string]: SubClass;
//     [indetifier: number]: SuperClass;
// }

interface StringDynamicKey {
    [key: string]: string;
}

enum NumberEnum {
    Prop = 0,
}

// enum StringEnum {
//     Prop = 'prop',
// }
//
// const example: StringDynamicKey = {
//     property: 'value',
//     '': 'value',
//     1: 'value',
//     [Symbol('key')]: '',
//     [NumberEnum.Prop]: '',
//     [StringEnum.Prop]: '',
// }


// class Indetifier {
//     [key: string]: string | (() => void);
//     [key: number]: string | (() => void);
//
//     public method(): void {}
// }

// class A {
//     [key: string]: string;
// }


// interface Indetifier {
//     [key: string]: string;
//     a: string;
//     // b: number;
// }
//
// const insanceObj: Indetifier = {
//     c: '',
//     d: '',
// }

// type T = {
//     [key: string]: number | string;
// };
//
// function fn(car: T): void {
//     if ('owner' in car) {
//         car['owner']?.toSting();
//     }
//     car['owner']?.toSting();
//     car[Math.random()]!.toSting();
// }

// function f(array: string[]): void {
//     for
// }

// type Settings = {
//     env?: string[];
//
//     [key: string]: any;
// };
//
// function configure(settings: Settings): void {
//     if (settings.env) {
//
//     }
//
//     if (settings['envs']) {
//
//     }
//
//     if (settings.env) {
//
//     }
//
//     if (settings['env']) {
//
//     }
// }

// type User = {
//     name?: string | undefined;
//     surName?: string | undefined;
// };
//
// declare const user: User;
//
// const admin: {[key: string]: string} = user;
//
// admin['name'] = 'admin';
// admin['age'] = undefined;

