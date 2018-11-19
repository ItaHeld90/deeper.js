import { filterSquare } from './filter-square';
import { identity } from './general-utils';

export const compactSquare = <T>(arr: RecursiveArray<T>): T[] => filterSquare(identity, arr);
