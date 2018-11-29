import { iterateObjDeep, DeepIteratee } from '../utils/iterate-obj-deep';

export const flatObjDeep = <T>(path: (string | number)[], obj: Object): DeepIteratee[] => {
    return Array.from(iterateObjDeep(path, obj));
};
