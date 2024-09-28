abstract class Shape {
    public readonly name: string;
    public readonly color: string;

    protected constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    public abstract calculateArea(): number;
}
