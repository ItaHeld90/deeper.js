import { mergeSquare } from './merge-square';
import { RecursiveArray } from "../utils/general-types";

export const mergeAllSquare = <T>(
    arrs: RecursiveArray<T>[],
): RecursiveArray<T> => {
    return arrs.reduce((res, arr) => mergeSquare(res, arr), []);
};

// update
// insert
// remove
// partition
// zip
// difference
// intersection
// symmetricDifference
// union

const a = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]