export class Circle extends Printable {
    public radius: number;

    constructor(color: string, name: string, radius: number) {
        super(color, name);
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
