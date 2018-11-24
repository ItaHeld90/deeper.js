import { findByPath, init, last } from './../utils/general-utils';
import { cloneDeep } from './clone-deep';
import { RecursiveArray } from './../utils/general-types';

export const updateSquare = <T, P extends T>(idxs: number[], value: P, arr: RecursiveArray<T>): RecursiveArray<T> => {
    const clone = cloneDeep(arr);
    const idxToUpdate = last(idxs);
    const arrToUpdatePath = init(idxs);

    const arrToUpdate = findByPath(arrToUpdatePath, clone);
    arrToUpdate

    if (Array.isArray(arrToUpdate) && arrToUpdate.length > idxToUpdate) {
        arrToUpdate[idxToUpdate] = value;
    }

    return clone;
}