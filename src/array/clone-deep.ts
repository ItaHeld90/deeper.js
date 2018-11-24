import { RecursiveArray, RecursiveItem } from './../utils/general-types';

export const cloneDeep = <T>(arr: RecursiveArray<T>): RecursiveArray<T> =>  {
    function recurse(item: RecursiveItem<T>) {
        return Array.isArray(item)
            ? arr.reduce((cloned: RecursiveArray<T>, item) => {
                cloned.push(recurse(item))
                return cloned;
            }, [])
            : item;
    }

    return recurse(arr) as RecursiveArray<T>;
}