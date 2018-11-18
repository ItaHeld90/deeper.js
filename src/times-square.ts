import { times } from './general-utils';

export const timesSquare = (cnts: number[], fn: (idxs: number[]) => any) => {
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