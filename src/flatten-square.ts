import { RecursiveArray, RecursiveItem } from "./general-types";

export const flattenSquare = <T>(arr: RecursiveArray<T>): T[] => {
    const result = [];

	for(let item of arr) {
        result.push(item);
    }

	return result;
};
