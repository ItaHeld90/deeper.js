import { iterateDeep } from './iterate-square';
import { RecursiveArray } from './general-types';

export const findSquare = <T>(predicateFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>): T => {
	for (let [item, idxs] of iterateDeep(arr)) {
		if (predicateFn(item, idxs)) {
			return item;
		}
	}

	return undefined;
};
