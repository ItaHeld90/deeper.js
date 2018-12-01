import { iterateObjDeep } from '../utils/iterate-obj-deep';
import { DeepIteratee, Path } from '../utils/general-types';

export const flatObjDeep = (path: Path, obj: Object): DeepIteratee[] => {
    return Array.from(iterateObjDeep(path, obj));
};
