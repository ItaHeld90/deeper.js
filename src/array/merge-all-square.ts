import { mergeSquare } from './merge-square';
import { RecursiveArray } from "../utils/general-types";

export const mergeAllSquare = <T>(
    arrs: RecursiveArray<T>[],
): RecursiveArray<T> => {
    return arrs.reduce((res, arr) => mergeSquare(res, arr), []);
};