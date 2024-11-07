export class Square extends Shape {
    public side: number;

    constructor(color: string, name: string, side: number) {
        super(color, name);
        this.side = side;
    }

    public calculateArea(): number {
        return this.side * this.side;
    }

    public print(): void {
        console.log(`Formula for area of Square: side * side = ${this.side} * ${this.side}`);
    }
}
