import { changeDeep } from './../utils/general-utils';
import { RecursiveArray } from './../utils/general-types';

export const updateSquare = <T>(idxs: number[], value: any, arr: RecursiveArray<T>): RecursiveArray<T> => {
    function update<T>(idxToUpdate: number, arrToUpdate: T[]) {
        arrToUpdate[idxToUpdate] = value;
    }

    return changeDeep(idxs, update, arr);
}
