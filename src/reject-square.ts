import { filterSquare } from './filter-square';
import { complement } from './general-utils';

export const rejectSquare = <T>(filterFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>) =>
	filterSquare(complement(filterFn), arr);
