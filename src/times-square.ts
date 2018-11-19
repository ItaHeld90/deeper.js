import { times } from './general-utils';
import { RecursiveArray } from './general-types';

export const timesSquare = <T>(cnts: number[], fn: (idxs: number[]) => T): RecursiveArray<T> => {
	const recurse = (cnts: number[], idxs: number[]) => {
		const [cnt, ...restCnts] = cnts;

		return !cnt
			? []
			: restCnts.length > 0
			? times(cnt, idx => recurse(restCnts, [...idxs, idx]))
			: times(cnt, idx => fn([...idxs, idx]));
	};

	return recurse(cnts, []);
};
