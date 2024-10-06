// export class Animal {
//     private id: string
//     protected maxAge: number
//     public name: string
// }
//
// interface IAnimal extends Animal {
//     age: number;
// }
//
// class Dog implements IAnimal {
//     age: number
//     protected maxAge: number
//     public name: string
// }

// interface IAnimal {
//     name: string;
// }
//
// class Animal implements IAnimal {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// class Cat extends Animal {
//     static DEFAULT_NAME = 'Barsik';
//
//     static create(): IAnimal {
//         return new Cat(Cat.DEFAULT_NAME);
//     }
// }
//
// class Dog extends Animal {
//     static DEFAULT_NAME = 'Bobik';
//
//     static create(): IAnimal {
//         return new Dog(Dog.DEFAULT_NAME);
//     }
// }
//
// const cat: Cat = new Cat('Murka');
// const dog: Dog = new Dog('Sharik');
//
// let a: IAnimal[] = [cat, dog];
// let b: IAnimal[] = [Cat, Dog];
//
// interface IAnimalConstructor {
//     new(name: string): IAnimal;
//     create(): IAnimal;
// }
//
// let c: IAnimalConstructor[] = [Cat, Dog];
// let d: IAnimal[] = c.map(item => item.create());

let identifier: {ps: string; p2: string};

interface IAnimal {
    name: string;
}

class Cat implements IAnimal {
    name: string;
}

class Dog implements IAnimal {
    name: string;
}

const cat: IAnimal = new Cat();
const dog: {name: string} = new Dog();

interface IT1 {}
interface IT2 {}


