type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};


type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<K & string>]: T[K];
};

type PropertyDescriptor<T> = {
    value: T;
    writable?: boolean;
    enumerable?: boolean;
    configurable?: boolean;
};

type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor<T[K]>;
};
