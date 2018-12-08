export type RecursiveItem<T> = T | RecursiveArray<T>;
export interface RecursiveArray<T> extends Array<RecursiveItem<T>> {};

export interface DeepIteratee {
    root: any;
    value: any;
    [others: string]: any;
};

export type Path = (string | number)[];

export interface ObjTreeConfig {
    name: string;
    projection?: ((record: Object) => Object) | (string | number)[];
    children?: ObjTreeConfigNode[];
}

export interface ObjTreeRelation {
    parentKey: string;
    childKey: string;
}

export interface ObjTreeConfigNode extends ObjTreeConfig, ObjTreeRelation {
    name: string;
}

export type ConstructTreeInput = { [name: string]: any[] };