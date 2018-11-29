import { iterateObjDeep } from '../utils/iterate-obj-deep';
import { DeepIteratee, Path } from '../utils/general-types';

export const flatMapObjDeep = <T>(mapperFn: (value: DeepIteratee) => T, path: Path, obj: Object): T[] => {
    const result: T[] = [];

    for (let item of iterateObjDeep(path, obj)) {
        result.push(mapperFn(item));
    }

    return result;
};