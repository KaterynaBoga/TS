//Conditions types
// T extends U ? X : Y

// type A<T> = T extends string ? string : boolean;
//
// let a: A<42>;
// let b: A<'Hello'>;
//
// type B<T> = T extends string | number ? object : never;
//
// let c: B<42>;
// let d: B<'Hello'>;
// let e: B<true>;
//
// type C<T> = T extends number ? 'yes' : 'no';
//
// let f: C<42>;
// let g: C<'Hello'>;
//
// type D<T> = T extends number ? 'isNumber' : T extends string ? 'isString' : 'Error';
//
// let h: D<42>;
// let i: D<'Hello'>;
// let j: D<true>;
//
// interface IUser {
//     name: string;
// }
//
// interface IAdmin extends IUser {
//     isActive: boolean;
// }
//
// interface IGuest {
//     name: string;
// }
//
// type A<T> = T extends IUser ? 'user' : T extends IAdmin ? 'admin' : T extends IGuest ? 'guest' : 'Error';
//
// let a: A<IUser>; // 'user'
// let b: A<IAdmin>; // 'user'
// let c: A<IGuest>; // 'user'
// let d: A<string>; // 'user'
//
// type B<T> = T extends IGuest ? 'guest' : T extends IAdmin ? 'admin' : T extends IUser ? 'user' : 'Error';
//
// let f: B<IGuest>; // 'guest'
// let g: B<IAdmin>; // 'admin'
// let h: B<IUser>; // 'guest'
// let i: B<string>; // 'Error'

// type Type<T, U> = T extends U ? 'yes' : 'no';
// let a: Type<number, any>
// let b: Type<number, string>

//////////////////////////////////
// Distributive Conditional Types

// type Type<T> = T extends number ? 'numeric' : T extends string ? 'text' : 'other';
//
// let a: Type<string | number>;
// let b: Type<string | boolean>;
//
// type TypeDescription<T> = number extends number
//   ? 'numeric'
//   : T extends string
//   ? 'text'
//   : 'other' | string extends number
//   ? 'numeric'
//   : string extends string
//   ? 'text'
//   : 'other';

// interface  IAnimal {
//     type: string;
// }
//
// interface ICat extends IAnimal {
//     meow(): void;
// }
//
// interface IIHomeCat extends ICat {
//     age?: number;
// }
//
// type A<T> = T extends IAnimal ? 'IAnimal' : T extends ICat ? 'ICat' : T extends IIHomeCat ? 'IIHomeCat' : 'no animal';
//
// let a: A<IAnimal | ICat>; // 'IAnimal'
// let b: A<ICat>; // 'IAnimal'
// let c: A<IIHomeCat>; // 'IAnimal'
//
// type B<T> = T extends IIHomeCat ? 'IIHomeCat' : T extends ICat ? 'ICat' : T extends IAnimal ? 'IAnimal' : 'no animal';
//
// let d: B<IAnimal | IIHomeCat>; // 'IAnimal' | 'IIHomeCat'
// let e: B<ICat>; // 'IIHomeCat'
// let f: B<IIHomeCat | ICat>; // 'IIHomeCat'



///////////////////////
// Infer

// function f(param: string): void {}
//
// type ParamType<T> = T extends (param: infer U) => void ? U : undefined;
//
// function funcA(param: number): void {}
// function funcB(param: string): void {}
// function funcC(): void {}
// function funcD(a: number, b: string): void {}
// function funcE(param: number[]): void {}
//
// let a: ParamType<typeof funcA>;
// let b: ParamType<typeof funcB>;
// let c: ParamType<typeof funcC>;
// let d: ParamType<typeof funcD>;
// let e: ParamType<typeof funcE>;
//
// const foo: number[] = [1, 2, 3];
// const bar: number[] = [];
//
// type FromArrayParamType<T> = T extends (param: (infer U)[]) => void
//     ? U
//     : T extends (param: infer U) => void
//     ? U
//     : never;
//
// let x: FromArrayParamType<typeof funcE>
// let y: FromArrayParamType<typeof funcA>
// let z: FromArrayParamType<typeof funcB>
// let w: FromArrayParamType<typeof funcC>
// let v: FromArrayParamType<typeof funcD>

// foo.forEach((value, index, array) => bar.push(value + 1));

/////////////////////////////////////////
// Utility Types

// type ConditionalUtilityTypes<T, U> = T extends U ? never : T;
//
// type A = ConditionalUtilityTypes<'a' | 'b' | 'c', 'a'>; // b | c
// type B = ConditionalUtilityTypes<'a' | 'b' | 'c', 'a' | 'b'>; // c
// type C = ConditionalUtilityTypes<string | number | (() => void), Function>; // string | number
//
// type Shape =
//     | {kind: 'circle', radius: number}
//     | {kind: 'square', sideLength: number}
//     | {kind: 'rectangle', width: number, height: number};
//
// type D = ConditionalUtilityTypes<Shape, {kind: 'circle'}>; // {kind: 'square', sideLength: number} | {kind: 'rectangle', width: number, height: number}
//
//
// type ConditionalUtilityTypes2<T, U> = T extends U ? T : never;
//
// type E = ConditionalUtilityTypes2<'a' | 'b' | 'c', 'a'>; // a
// type F = ConditionalUtilityTypes2<string | number | (() => void), Function>; // () => void
// type G = ConditionalUtilityTypes2<Shape, {kind: 'circle'}>; // {kind: 'circle', radius: number}
//

type TNonNullable<T> = T extends null | undefined ? never : T;

type A = TNonNullable<string | number | null>;
type B = NonNullable<string | number | null | undefined>;

type C = NonNullable<undefined | null>; // never


