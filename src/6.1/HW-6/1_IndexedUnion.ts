interface IndexedUnion {
    [key: string]: number | string;
}

const example1: IndexedUnion = {
    name: "John",
    age: 25,
    city: "Kyiv",
};
