import { groupBy } from "../utils/general-utils";

interface ObjTreeConfig {
    records: Object[];
    children?: ObjTreeConfigNode[];
    projection?: ((record: Object) => Object) /* | (string | number)[] */;
}

interface ObjTreeRelation {
    parentKey: string;
    childKey: string;
}

interface ObjTreeConfigNode extends ObjTreeConfig, ObjTreeRelation {
    targetName: string;
}

const constructObjTree = (objTree: ObjTreeConfig): Object[] => {
    const childrenRecordGroups =
        objTree.children.map(({ childKey, records, parentKey, ...otherProps }) => ({
            recordsByParentKey: groupBy(childRecord => childRecord[childKey], records),
            parentKeyProp: parentKey,
            ...otherProps,
        }));

    return objTree.records.map((parentRecord) => {
        const extension = childrenRecordGroups.reduce(
            (res, { targetName, parentKeyProp, recordsByParentKey, projection: childProjection, children = [] }) => {
                // console.log(util.inspect(childrenRecordGroups, false, null))
                const childRecords = recordsByParentKey[parentRecord[parentKeyProp]];
                res[targetName] = constructObjTree({ records: childRecords, children, projection: childProjection });
                return res;
            }, {});

        const projectedParentRecord = objTree.projection ? objTree.projection(parentRecord) : parentRecord;

        return {
            ...projectedParentRecord,
            ...extension
        };
    });
};

