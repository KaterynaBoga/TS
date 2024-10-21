// // keyof
// type AliasType = { a: number; b: string };
//
// interface IInterface {
//     a: number;
//     b: string;
// }
//
// class ClassType {
//     a: number;
//     b: string;
// }
//
// let a: keyof AliasType;
// let b: keyof IInterface;
// let c: keyof ClassType;
// let d: keyof { a: number; b: string };
//
// class Type {
//     public static fieldClass: number;
//
//     public publicField: boolean;
//     protected protectedField: string;
//     private privateField: number;
//
//     public get property(): number {
//         return NaN;
//     }
//
//     public set property(value: number) {}
//     public constructor() {}
//     public static methodStatic(): void {}
//     public instanceMethod(): void {}
// }
//
// let a: 'property' | 'publicField' | 'instanceMethod' = 'property';
// let b: keyof Type = 'publicField';
// let c: keyof Type = 'protectedField';
//
// type AliasType = {};
// interface IInterface {}
//
// class ClassType {
//     private a: number;
//     private b: string;
// }
//
// let a: keyof AliasType; // 'undefined' || '' || never
// let b: keyof IInterface;
// let c: keyof ClassType;
// let d: keyof {};
//
// function foo<T, U extends keyof T>(): void {}
//
// class User {
//     public name: string;
//     public age: number;
// }
//
// const user: { name: string; age: number} = new User();
//
// let type: typeof user; // User || type 'string || 'number' || object || { name: string; age: number }
//
// let union: keyof typeof user; // 'name' || 'age'
//
// type A = keyof number;
// type B = keyof any;
// type C = keyof unknown;
//
// const form = {
//     userNameCtr: '',
//     emailCtr: '',
//     passwordCtr: '',
// }
//
// const userName = getCtrValue('userNameCtr');
//
// // abstract class BaseForm<T extends {}> {
// //     public form: T = {};
// //     public getCtrValue<key: keyof T>{
// //         return form[key];
// //     }
// // }
//
// function getCtrValue(key: keyof typeof form) {
//     return form[key];
// }

//
// interface IUser {
//     name: string;
//     age: number;
// }
//
// let useName: IUser ['name'] = 'name';
// let useAge: IUser ['age'] = 1
// let union: IUser ['name' | 'age'] = 'name';
// let notexist: IUser ['notexist'] = 'name';
//
// class ClassType {
//     public static publicFieldClass: number;
//     public publicInstanceField: string;
//
// }
//
// class Model<T> {
//     constructor(private entity: T) {}
//     public get<K extends keyof T>(key: K): T[K] {
//         return this.entity[key];
//     }
// }
//
// interface IUserModel {
//     name: string;
//     age: number;
// }
//
// const json = '"{"name": "John", "age": 30}"';
// const entity: IUserModel = JSON.parse(json);
//
// const userModel = new Model(entity);
//
// const id = userModel.get('name');
// const age = userModel.get('age');

// const userModel = new Model(entity);
// const id = userModel.get('name');
// const age = userModel.get('age');

// Mapped types
// type MappedType = {
//     [Key in MultiSet]: RandomDataType;
// }
//
// type FirstLiteralStringType = 'first';
// type MappedType = {
//     [Key in FirstLiteralStringType]: string;
// }
//
// type LiteralStringType = 'first' | 'second';
// type MappedType = {
//     [Key in LiteralStringType]: string;
// }
//
// type ABC = 'A' | 'B' | 'C';
//
// type ABCWithString = {
//     [Key in ABC]: string;
// }
//
// function abcWithString(params: ABCWithString): void {}
//
// abcWithString({ A: 'a', B: 'b', C: 'c' });

// type MappedType<T, U extends keyof T> = {
//     [Key in keyof T]: T[Key];
// };
//
// interface IUser {
//     name: string;
//     age: number;
// }
//
// const x: MappedType<IUser, 'age'> = {
//     name: 'John',
//     age: 30,
// };
//
// type ReadonlyMember<T> = {
//     readonly [Property in keyof T]: T[Property];
// };
//
// let user: ReadonlyMember<IUser>; // user: { readonly name: string; readonly age: number; }
//
// type Nullable<T> = {
//     [Property in keyof T]: T[Property] | null;
// };
//
// type Stringify<T> = {
//     [Property in keyof T]: string;
// };
//
// let nullable: Nullable<IUser>;
// let stringify: Stringify<IUser>;
//
// type AliasType<T, U> = {
//     [Property in keyof T]: T[Property] | U;
// }

// type User = {
//     name: string;
//     age: number;
// }

// type ToGetter<T extends string> = `get${Capitalize<T>}`;
//
// type Getters<T> = {
//     [K in keyof T]: () => T[K];
// };

// type T = {
//     getName: () => string;
//     getAge: () => number;
// }

// type MappedType<T> = {
//     [K in keyof T]: T;
// };
//
// type A = MappedType<number>;
// type B = MappedType<any>;
// type C = MappedType<unknown>;
//
// interface IWithoutModifiers {
//     field: string;
//
// }
//
// type AddModifiers<T> = {
//     +readonly [P in keyof T]+?: T[P];
// }
//
// const withoutModifiers: IWithoutModifiers = {
//     field: 'field',
// };
// withoutModifiers.field = 'new field';
// const addModifiers: AddModifiers<IWithoutModifiers> = {
//     field: 'field',
// };
//
// addModifiers.field = 'new field 2';
//
// interface IWithModifiers {
//     readonly field?: string;
// }
//
// type RemoveModifiers<T> = {
//     -readonly [P in keyof T]-?: T[P];
// }
//
// const removeModifiers: RemoveModifiers<IWithModifiers> = {
//     field: 'field',
// };
// removeModifiers.field = 'new field 3';

type MappedType<Key extends keyof any, T> = {
    [P in Key]: T;
}

interface ICatInfo {
    breed: string;
    age: number;
}

type CatName = 'Molly' | 'Bella' | 'Luna';

const cats: Record<CatName, ICatInfo> = {
    Molly: {
        breed: 'Persian',
        age: 2,
    },
    Bella: {
        breed: 'Siamese',
        age: 3,
    },
    Luna: {
        breed: '',
        age: 1,
    }
}
