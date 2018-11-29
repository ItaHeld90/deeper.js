import { iterateObjDeep, DeepIteratee } from '../utils/iterate-obj-deep';

export const findObjDeep = <T>(predicateFn: (item: DeepIteratee) => boolean, path: (string | number)[], obj: Object): T => {
	for (let iteratee of iterateObjDeep(path, obj)) {
		if (predicateFn(iteratee)) {
			return iteratee.value;
		}
	}

	return undefined;
};