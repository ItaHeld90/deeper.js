import { RecursiveItem, RecursiveArray } from "./general-types";

export const reduceSquare = <T, P>(
	reducerFn: (acc: P, item: T, idxs: number[]) => P,
	initial: P,
	arr: RecursiveArray<T>[]
): P => {
	function recurse(result: P, input: RecursiveItem<T>, idxs: number[]) {
		return Array.isArray(input)
			? input.reduce((acc, item, idx) => recurse(acc, item, [...idxs, idx]), result)
			: reducerFn(result, input, idxs);
	}

	return recurse(initial, arr, []);
};
