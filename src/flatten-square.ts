import { RecursiveArray, RecursiveItem } from "./general-types";

export const flattenSquare = <T>(arr: RecursiveArray<T>): T[] => {
	function recurse(result: T[], input: RecursiveItem<T>) {
		return Array.isArray(input) ? input.reduce(recurse, result) : [...result, input];
    }

	return recurse([], arr);
};
