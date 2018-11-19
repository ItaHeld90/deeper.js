import { filterSquare } from './filter-square';
import { identity } from './utils/general-utils';
import { RecursiveArray } from './general-types';

export const compactSquare = <T>(arr: RecursiveArray<T>): T[] => filterSquare(identity, arr);
