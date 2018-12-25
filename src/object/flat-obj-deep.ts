import { iterateObjDeep } from '../utils/iterate-obj-deep';
import { DeepIteratee, Path } from '../utils/general-types';

export const flatObjDeep = <T extends Object>(path: Path<T>, obj: T): DeepIteratee[] => {
	return Array.from(iterateObjDeep(path, obj));
};