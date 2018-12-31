import { iterateDeep } from '../utils/iterate-square';
import { RecursiveArray } from '../utils/general-types';

export const findIndexDeep = <T>(predicateFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>): number[] => {
	for (let [item, idxs] of iterateDeep(arr)) {
		if (predicateFn(item, idxs)) {
			return idxs;
		}
	}

	return undefined;
};