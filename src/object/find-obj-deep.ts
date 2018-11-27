import { iterateObjDeep } from '../utils/iterate-obj-deep';

export const findObjDeep = <T>(predicateFn: (item: T) => boolean, path: (string | number)[], obj: Object): T => {
	for (let { value } of iterateObjDeep(path, obj)) {
		if (predicateFn(value)) {
			return value;
		}
	}

	return undefined;
};
