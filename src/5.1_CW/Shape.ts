abstract class Shape {
    public name: string;
    public color: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    public calculateArea(): number {
        return 0;
    }
}
