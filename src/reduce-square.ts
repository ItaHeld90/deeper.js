export const reduceSquare = <T, P>(reducerFn: (acc: any, item: T, idxs: number[]) => P, initial: P, arr: any[]): P => {
	function recurse(result: P, input: any, idxs: number[]) {
		return Array.isArray(input)
			? input.reduce((acc, item, idx) => recurse(acc, item, [...idxs, idx]), result)
			: reducerFn(result, input, idxs);
	}

	return recurse(initial, arr, []);
};
