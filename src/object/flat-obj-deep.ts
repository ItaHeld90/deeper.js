import { iterateObjDeep } from '../utils/iterate-obj-deep';

export const flatObjDeep = <T>(path: (string | number)[], arr: T): any[] => {
    const result = [];

    for (let item of iterateObjDeep(path, arr)) {
        result.push(item);
    }

    return result;
};
