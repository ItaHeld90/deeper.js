import { iterateDeep } from '../utils/iterate-square';
import { RecursiveArray } from '../utils/general-types';

export const findIndicesDeep = <T>(predicateFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>): number[][] => {
	const indices: number[][] = [];

	for (let [item, idxs] of iterateDeep(arr)) {
		if (predicateFn(item, idxs)) {
			indices.push(idxs);
		}
	}

	return indices;
};