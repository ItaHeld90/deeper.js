import { RecursiveArray, RecursiveItem } from "./general-types";

export const times = <T>(amount: number, fn: (idx: number) => T) => {
	const result = [];

	for (let i = 0; i < amount; i++) {
		result.push(fn(i));
	}

	return result;
};

export const tail = (arr: any[]) => arr.slice(1);
export const init = (arr: any[]) => arr.slice(0, arr.length - 1);
export const last = (arr: any[]) => arr[arr.length - 1];

export const identity = item => item;

export const compact = (arr: any[]) => arr.filter(identity);

export const complement = <T extends any[]>(fn: (...parmas: T) => boolean) => (...params: T) => !fn(...params);

export const zip = <T>(arr1: T[], arr2: T[]): [T, T][] => {
	const minSize = Math.min(arr1.length, arr2.length);
	return times(minSize, idx => [arr1[idx], arr2[idx]]);
}

export const updateInIndex = <T>(idx: number, newVal: T, arr: T[]): T[] => {
	const before = arr.slice(0, Math.min(idx, arr.length - 1));
	const after = arr.slice(Math.min(idx + 1, arr.length));
	before
	after

	return [...before, newVal, ...after];
}

export const maxBy = <T>(fn: (item: T) => number, ...arr: T[]) => {
	let maxVal: number;
	let max: T;

	for (let item of arr) {
		const val = fn(item);
		const isMax = val > maxVal;

		if (isMax) {
			maxVal = val;
			max = item;
		}
	}

	return max;
};

export const drop = <T>(amount: number, arr: T[]): T[] => {
	return arr.slice(amount);
}

export const findByPath = <T>(idxs: number[], arr: RecursiveArray<T>) => {
	function recurse(idxs: number[], item: RecursiveItem<T>) {
		return !idxs.length
			? item
			: Array.isArray(item)
			? recurse(tail(idxs), item[idxs[0]])
			: undefined;
	}

	return recurse(idxs, arr);
}
