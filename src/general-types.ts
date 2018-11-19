type RecursiveItem<T> = T | RecursiveArray<T>;
interface RecursiveArray<T> extends Array<RecursiveItem<T>> {};