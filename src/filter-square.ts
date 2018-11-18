import { compact } from './general-utils';

export const filterSquare = (filterFn: (item: any, idxs: number[]) => boolean, arr: any) => {
	function recurse(input: any, idxs: number[]) {
		return Array.isArray(input)
			? compact(input.map((item, idx) => recurse(item, [...idxs, idx])))
			: filterFn(input, idxs)
			? input
			: null;
	}

	return recurse(arr, []);
};
