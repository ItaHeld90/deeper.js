import { iterateDeep } from '../utils/iterate-square';
import { RecursiveArray } from '../utils/general-types';

export const containsSquare = <T>(itemToFind: T, arr: RecursiveArray<T>): boolean => {
	for (let [item] of iterateDeep(arr)) {
		if (itemToFind === item) {
			return true;
		}
	}

	return false;
};
