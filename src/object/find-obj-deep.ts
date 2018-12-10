import { iterateObjDeep } from '../utils/iterate-obj-deep';
import { DeepIteratee, Path } from '../utils/general-types';

export const findObjDeep = <T>(predicateFn: (item: DeepIteratee) => boolean, path: Path<T>, obj: T): DeepIteratee => {
	for (let iteratee of iterateObjDeep(path, obj)) {
		if (predicateFn(iteratee)) {
			return iteratee.value;
		}
	}

	return undefined;
};