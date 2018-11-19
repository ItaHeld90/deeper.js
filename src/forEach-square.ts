import { RecursiveArray } from './general-types';
import { iterateDeep } from './utils/iterate-square';

export const forEachSquare = <T>(fn: (item: T, idxs: number[]) => void, arr: RecursiveArray<T>) => {
	for (let [item, idxs] of iterateDeep(arr)) {
		fn(item, idxs);
	}
};
