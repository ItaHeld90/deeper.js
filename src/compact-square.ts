import { filterSquare } from './filter-square';
import { identity } from './general-utils';

export const compactSquare = <T extends any[]>(arr: T): T => filterSquare(identity, arr);
