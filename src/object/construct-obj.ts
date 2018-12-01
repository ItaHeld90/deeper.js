import { groupBy } from "../utils/general-utils";

export const constructObjTree = <P extends Object, C extends Object>(options: { parentKey: keyof P, childKey: keyof C, childTargetName: string }, parents: P[], children: C[]) => {
    const { parentKey, childKey, childTargetName } = options;

    const childrenByParent: { [key: string]: C[] } = groupBy(c => c[childKey], children);

    return parents.map(p => {
        const parentRelationKey = p[parentKey];
        return typeof parentRelationKey === 'number' || typeof parentRelationKey === 'string'
            ? {
                ...(p as Object),
                [childTargetName]: childrenByParent[parentRelationKey as (number | string)]
            }
            : p;
    });
};