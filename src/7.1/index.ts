// Type Guards

// class Bird {
//     public fly() {}
//     public voice() {}
// }

// class Fish {
//     public swim(){}
//     public voice(){}
// }

// function move(animal: Bird | Fish): void {
//     animal.voice();
//     animal.fly();
//     animal.swim();
// }

type ParamType = number | string | boolean | object | Function | symbol | undefined;

function fn(param: ParamType): void {
    if (typeof param === 'number') {
        param;
    } else if (typeof param === 'string') {
        param;
    } else if (typeof param === 'boolean') {
        param;
    } else if (typeof param === 'object') {
        param;
    } else if (typeof param === 'function') {
        param();
    } else if (typeof param === 'symbol') {
        param;
    } else if (typeof param === 'undefined') {
        param;
    }
}

// class Animal{
//     constructor(public type: string) {}
// }

// class Bird extends Animal {}
// class Fish extends Animal {}
// class Cat extends Animal {}

// function f(param: Bird | Fish | Cat): void {
//     param;
//     if (param instanceof Bird) {
//         param;
//     } else if (param instanceof Fish) {
//         param;
//     } else {
//         param;
//     }
//     param;
// }
//
// function f1(param: string | (() => string)): void {
//     param;
//     let value: string = typeof param !== 'string' ? param() : param;
//
//     param;
// }
//
// class Animal {
//     public type: string = 'type';
// }
//
// function f2(param: Animal | (() => Animal)): void {
//     let value: Animal = !(param instanceof Animal) ? param() : param;
// }
//
// enum AnimalTypeEnum {
//     Bird = 'Bird',
//     Fish = 'Fish',
//     Cat = 'Cat',
// }
//
// class Bird {
//     type: AnimalTypeEnum = AnimalTypeEnum.Bird;
//
//     fly() {}
// }
//
// class Fish {
//     type: AnimalTypeEnum.Fish = AnimalTypeEnum.Fish;
//
//     swim():void {}
// }
//
// function move(param: Bird | Fish): void {
//     param;
//     // if (param.type === AnimalTypeEnum.Bird) {
//     //     param.fly();
//     // } else {
//     //     param.swim();
//     // }
//
//     // param.type === AnimalTypeEnum.Bird ? param.fly() : param.swim();
//
//     switch (param.type) {
//         case AnimalTypeEnum.Bird:
//             param.fly();
//             break;
//         case AnimalTypeEnum.Fish:
//             param.swim();
//             break;
//     }
//
//     param;
// }
//
// function f(param: number | null | undefined): void {
//     if (param !== null && param !== undefined) {
//         param;
//     }
//
//     if(param) {
//         param;
//     }
//
//     var value = param ? param : 0;
//     var value = param ?? 0;
//     var value = param || 0;
//
//     switch (param) {
//         case null:
//             param;
//             break;
//         case undefined:
//             param;
//             break;
//         default:
//             param;
//     }
// }

// class Ability {
//     public fly(): void {}
// }
//
// class Bird {
//     public ability: Ability | null = new Ability();
// }
//
// function move(animal: Bird | null | undefined): void {
//     if (animal && animal.ability) {
//         animal.ability.fly();
//     }
//
//     if (animal?.ability) {
//         animal.ability.fly();
//     }
// }
//
// class A {
//     public a: number = 10;
// }
//
// class B {
//     public b: string = 'string';
// }
//
// class C extends A {}
//
// function f0(p: A | B): void {
//     if ('a' in p) {
//         return p.a;
//     } else {
//        return  p.b;
//     }
// }
//
// function f1(p: B | C) {
//     if('a' in p) {
//         return p.a;
//     }
//     return p.b;
// }

// function Constructor() {}
//
// Constructor.prototype.validator = function(): this is Object{
//     return true;
// }

// interface IPredical {
//     validator(): this is Object;
// }
//
// var object: IPredical = {
//   validator(): this is Object {
//         return true;
//   },
// }
//
// var object: {validator(): this is Object} = {
//     validator(): this is Object {
//         return true;
//     },
// }


// function isTypeA(p1: TypeA | TypeB | TypeC): p1 is TypeA {
// //     return instanceof TypeA;
// // }
// //
// // function f(p1: TypeA | TypeB | TypeC): void {
// //     if (isTypeA(p1)) {
// //         p1;
// //     }
// // }
// //
// // const isT2 = (p1: TypeA | TypeB | TypeC): p1 is TypeB => p1 instanceof TypeB;
// //
// // function f1(p1: TypeA | TypeB | TypeC): void {
// //     if (isT2(p1)) {
// //         p1;
// //     }
// // }
// //
// // export class Validator {
// //     public static isTypeC(p1: TypeA | TypeB | TypeC): p1 is TypeC {
// //         return p1 instanceof TypeC;
// //     }
// // }
// //
// // function f2(p1: TypeA | TypeB | TypeC): void {
// //     if (Validator.isTypeC(p1)) {
// //         p1;
// //     }
// // }
//
// // class Animal {}
// //
// // class Bird extends Animal {
// //     public fly(): void {}
// // }
// //
// // class Fish extends Animal {
// //     public swim(): void {}
// // }
// //
// // class Cat extends Animal {
// //     public run(): void {}
// // }
// //
// // class AnimalValidator {
// //     public static isBird(animal: Animal): animal is Bird {
// //         return animal instanceof Bird;
// //     }
// //
// //     public static isFish(p: Animal): p is Fish {
// //         return (p as Fish).swim !== undefined;
// //     }
// //
// //     public static isCat(p: Animal): p is Cat {
// //         let isAnimalNotUndefined = p !== undefined;
// //         let isCatValid: boolean = p instanceof Cat;
// //
// //         return isAnimalNotUndefined && isCatValid;
// //     }
// // }
// //
// // function move(p: Animal): void {
// //     if (AnimalValidator.isBird(p)) {
// //         p.fly();
// //     } else if (AnimalValidator.isFish(p)) {
// //         p.swim();
// //     } else if (AnimalValidator.isCat(p)) {
// //         p.run();
// //     }
// // }
//
// // class Animal {
// //     constructor(public type: string) {}
// // }
// //
// // class Bird extends Animal {}
// // class Fish extends Animal {}
// //
// // function move(p: Bird | Fish): void {
// //     if (p instanceof Bird) {
// //         p;
// //     } else if (p instanceof Fish) {
// //         p;
// //     } else {
// //         p;
// //     }
// //     p;
// // }
//
//
// class Fish {
//     public swim(): void {}
// }
//
// const nemo = {
//     swim(): void {}
// };
//
// let fishA: Fish = new Fish();
// let fishB = <Fish>nemo;
//
// class Bird {
//     public fly(): void {}
// }
//
// class Fish {
//     public swim(): void {}
// }
//
// let bird: Bird = new Bird();
// // let fish: Fish = <Fish>bird;
// let fish: Fish = bird as Fish;
//
// const element = {
//     width: '42',
//     height: '42',
// }
//
// const {width: widthString, height: heightString} = element;
//
// // const width: number = <number>(<any>widthString);
// const width: number = (widthString as any) as number;
// const height: number = <number>(<any>heightString);
//
// class DataProvider {
//     constructor(public data: any) {}
// }
//
// let provider: DataProvider = new DataProvider('text');
//
// var charAll: string[] = provider.data.split('');
// var charAll: string[] = provider.data.sPlit('');
// var charAll: string[] = (provider.data as string).sPlit('');
// var charAll: string[] = (provider.data as string).split('');
//
// let dataString: string = provider.data as string;
// var charAll: string[] = dataString.split('');
//
// type Status = 200 | 400;
// type TypeRequest = {statusSuc: Status};
//
// let statusSuc = 200 as const;
//
// // const request: TypeRequest = { statusSuc: statusSuc as 200};
// // const request: TypeRequest = { statusSuc: <200>statusSuc};
// // const request: TypeRequest = { statusSuc};
//
// let a = [200, 404]
//
// let b = [200, 404] as const;
//
// let c = <const>[200, 404];

// type NotConstResponseType = {
//     status: number;
//     data: {
//         role: string;
//     }
// }
//
// type ConstResponseType = {
//     status: 200 | 400;
//     data: {
//         role: 'admin' | 'user';
//     }
// }
//
// let a = {status: 200, data: {role: 'user'}};
// let b = {status: 200, data: {role: 'user'}} as const;
// let c = <const>{status: 200, data: {role: 'user'}};

// let a = 'value' as const;
// let b = 100 as const;
// let b1 = 100n as const;
// let c = true as const;
//
// let d1 = [] as const;
// let e = { f: 100 } as const;
//
// let value = 'value';
// let array = [];
// let object = {};

// let f = value as const;

let defaultObject = {f: 100};
let constObject = {f: 100} as const;

let defaultArray = [100, 200];
let constArray = [100, 200] as const;

function identifier1(condition: any): asserts condition {
    if (!condition) {
        throw new Error();
    }
}

function isStringAssert(condition: any): asserts condition {
    if (typeof condition !== 'string') {
        throw new Error();
    }
}

function isString(value: any): value is string {
    return typeof value === 'string';
}

const testScope = (text: any) => {
    text.toupperCase();

    // isStringAssert(text instanceof String);
    // isStringAssert(typeof text === 'string');
    isStringAssert(typeof text === 'number');
    // isStringAssert(isString(text));

    text.toupperCase();
    text;
}
