import { changeDeep } from '../utils/general-utils';
import { RecursiveArray } from '../utils/general-types';

export const insertSquare = <T>(idxs: number[], values: any[], arr: RecursiveArray<T>): RecursiveArray<T> => {
    function insert<T>(idxToUpdate: number, arrToUpdate: T[]) {
        arrToUpdate.splice(idxToUpdate, 0, ...values);
    }

    return changeDeep(idxs, insert, arr);
}