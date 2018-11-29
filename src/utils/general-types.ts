export type RecursiveItem<T> = T | RecursiveArray<T>;
export interface RecursiveArray<T> extends Array<RecursiveItem<T>> {};

export interface DeepIteratee {
    root: any;
    value: any;
    [others: string]: any;
};

export type Path = (string | number)[];