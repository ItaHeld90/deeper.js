export type RecursiveItem<T> = T | RecursiveArray<T>;
export interface RecursiveArray<T> extends Array<RecursiveItem<T>> {};