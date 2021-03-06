import { groupBy, pick, identity } from "../utils/general-utils";
import { ObjTreeConfig, ConstructTreeInput } from "../utils/general-types";

export const constructObjTree = (objTree: ObjTreeConfig, input: ConstructTreeInput): Object[] => {
    const parentRecords = input[objTree.name];

    const projection = !objTree.projection
        ? identity
        : typeof objTree.projection === 'function'
            ? objTree.projection
            : parentRecord => pick(objTree.projection as string[], parentRecord) as Object

    const childrenRecordGroups =
        objTree.children.map(({ name, childKey, parentKey, ...otherProps }) => ({
            recordsByParentKey: groupBy(childRecord => childRecord[childKey], input[name]),
            parentKeyProp: parentKey,
            name,
            ...otherProps,
        }));

    return parentRecords.map(parentRecord => ({
        ...projection(parentRecord),
        ...(childrenRecordGroups.reduce(
            (res, { name, parentKeyProp, recordsByParentKey, projection: childProjection, children = [] }) => {
                const childRecords = recordsByParentKey[parentRecord[parentKeyProp]];
                res[name] = constructObjTree(
                    { name, children, projection: childProjection },
                    { ...input, [name]: childRecords }
                );
                return res;
            }, {}))
    }));
};