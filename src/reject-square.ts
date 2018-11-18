import { filterSquare } from './filter-square';
import { complement } from './general-utils';

export const rejectSquare = (filterFn: (item: any, idxs: number[]) => boolean, arr: any) =>
	filterSquare(complement(filterFn), arr);
