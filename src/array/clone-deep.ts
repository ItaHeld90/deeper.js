import { RecursiveArray, RecursiveItem } from './../utils/general-types';

export const cloneDeep = <T>(arr: RecursiveArray<T>): RecursiveArray<T> =>  {
    function recurse(item: RecursiveItem<T>) {
        return Array.isArray(item)
            ? item.reduce((cloned: RecursiveArray<T>, subItem) => {
                cloned.push(recurse(subItem))
                return cloned;
            }, [])
            : item;
    }

    return recurse(arr) as RecursiveArray<T>;
}