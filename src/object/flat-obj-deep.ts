import { iterateObjDeep } from '../utils/iterate-obj-deep';

export const flatObjDeep = <T>(path: (string | number)[], arr: Object): T[] => {
    const result = [];

    for (let { value } of iterateObjDeep(path, arr)) {
        result.push(value);
    }

    return result;
};
