export class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(color: string, name: string, width: number, height: number) {
        super(color, name);
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public print(): void {
        console.log(`Formula for area of Rectangle: width * height = ${this.width} * ${this.height}`);
    }
}
