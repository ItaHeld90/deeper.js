import { compact } from '../utils/general-utils';
import { RecursiveItem, RecursiveArray } from '../utils/general-types';

export const filterSquare = <T>(filterFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>) => {
	function recurse(input: RecursiveItem<T>, idxs: number[]) {
		return Array.isArray(input)
			? compact(input.map((item, idx) => recurse(item, [...idxs, idx])))
			: filterFn(input, idxs)
			? input
			: null;
	}

	return recurse(arr, []);
};
