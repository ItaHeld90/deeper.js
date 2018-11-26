import { changeDeep } from './../utils/general-utils';
import { RecursiveArray } from './../utils/general-types';

export const updateSquare = <T>(idxs: number[], value: any, arr: RecursiveArray<T>): RecursiveArray<T> => {
    return changeDeep(idxs, value, update, arr);
}

function update<T, P extends T>(idxToUpdate: number, value: P, arrToUpdate: T[]) {
    arrToUpdate[idxToUpdate] = value;
}