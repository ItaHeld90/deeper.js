import { updateInIndex } from './../utils/general-utils';
import { RecursiveArray, RecursiveItem } from "../utils/general-types";

export const mergeSquare = <T>(
    arr1: RecursiveArray<T>,
    arr2: RecursiveArray<T>
): RecursiveArray<T> => {
    function recurse(item1: RecursiveArray<T>, item2: RecursiveArray<T>): RecursiveItem<T> {
        return item2.reduce(
            (res: RecursiveArray<T>, subItem2, idx) => {
                const subItem1 = item1[idx];

                return (Array.isArray(subItem1) && Array.isArray(subItem2))
                    ? updateInIndex(idx, recurse(subItem1, subItem2), res)
                    : [...res, subItem2];
            }
            , item1
        );
    }

    return recurse(arr1, arr2) as RecursiveArray<T>;
};