import { iterateObjDeep, DeepIteratee } from '../utils/iterate-obj-deep';

export const flatMapObjDeep = <T>(mapperFn: (value: DeepIteratee) => T, path: (string | number)[], obj: Object): T[] => {
    const result: T[] = [];

    for (let item of iterateObjDeep(path, obj)) {
        result.push(mapperFn(item));
    }

    return result;
};