import { iterateObjDeep } from '../utils/iterate-obj-deep';

export const findObjDeep = <T>(predicateFn: (item: T) => boolean, path: (string | number)[], arr: T): any[] => {
	for (let item of iterateObjDeep(path, arr)) {
		if (predicateFn(item)) {
			return item;
		}
	}

	return undefined;
};
