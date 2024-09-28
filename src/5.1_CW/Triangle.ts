export class Triangle extends Shape {
    public base: number;
    public height: number;

    constructor(color: string, name: string, base: number, height: number) {
        super(color, name);
        this.base = base;
        this.height = height;
    }

    public calculateArea(): number {
        return this.base * this.height / 2;
    }
}
