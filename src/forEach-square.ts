export const forEachSquare = <T>(fn: (item: T, idxs: number[]) => void, arr: RecursiveArray<T>) => {
	function recurse(input: RecursiveItem<T>, idxs: number[]) {
		Array.isArray(input) ? input.forEach((item, idx) => recurse(item, [...idxs, idx])) : fn(input, idxs);
	}

	recurse(arr, []);
};
