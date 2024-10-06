// // public, protected, private
//
// class Animal {
//     private static DEFAULT_NAME = 'Animal';
//     private readonly _name: Animal.DEFAULT_NAME;
//     public get name(): string {
//         return this._name;
//     }
//
//     public set name(value: string) {
//         this._name = value;
//     }
//
//     public constructor(name: string) {
//         this._name = name;
//     }
//
//     protected static inputInfo(text: string): string {
//         return `Enter ${text}: `;
//     }
//
//     public toString(): string {
//         return Animal.inputInfo('name') + this.name;
//     }
// }

// class Animal {
//     public name: string;
//     constructor() {
//         this.name = 'Animal';
//     }
// }
//
// class Bird extends Animal {
//     constructor() {
//         super();
//         super.name = 'Bird';
//     }
//
//     public fly(): void {
//         console.log('I can fly');
//     }
// }
//
// const animal: Animal = new Animal();
// animal.name = 'newAnimal';
//
// const bird: Bird = new Bird();
// bird.name = 'newBird';

class AnimalUtil {
    private static MS_TO_DAY = 1000 * 60 * 60 * 24;

    private constructor() {
    }

    public static ageFromToDateFormated(time: number): number {
        return Math.floor(time / this.MS_TO_DAY);
    }
}
