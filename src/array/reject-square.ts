import { filterSquare } from './filter-square';
import { complement } from '../utils/general-utils';
import { RecursiveArray } from '../utils/general-types';

export const rejectSquare = <T>(filterFn: (item: T, idxs: number[]) => boolean, arr: RecursiveArray<T>) =>
	filterSquare(complement(filterFn), arr);
