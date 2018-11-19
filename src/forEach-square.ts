export const forEachSquare = (fn: (item: any, idxs: number[]) => any, arr: any) => {
	function recurse(input: any, idxs: number[]) {
		Array.isArray(input) ? input.forEach((item, idx) => recurse(item, [...idxs, idx])) : fn(input, idxs);
	}

	recurse(arr, []);
};
