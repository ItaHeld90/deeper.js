import { groupBy, pick, identity } from "../utils/general-utils";
//@ts-ignore
const util = require('util');

interface ObjTreeConfig {
    name: string;
    projection?: ((record: Object) => Object) | (string | number)[];
    children?: ObjTreeConfigNode[];
}

interface ObjTreeRelation {
    parentKey: string;
    childKey: string;
}

interface ObjTreeConfigNode extends ObjTreeConfig, ObjTreeRelation {
    name: string;
}

type ConstructTreeInput = { [name: string]: any[] };

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