import { changeDeep } from './../utils/general-utils';
import { RecursiveArray } from './../utils/general-types';

export const removeSquare = <T>(idxs: number[], amount: number, arr: RecursiveArray<T>): RecursiveArray<T> => {
    function remove<T>(idxToUpdate: number, arrToUpdate: T[]) {
        arrToUpdate.splice(idxToUpdate, amount);
    }

    return changeDeep(idxs, remove, arr);
}
