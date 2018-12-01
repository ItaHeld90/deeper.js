import { groupBy } from "../utils/general-utils";

interface ObjTreeConfig {
    records: Object[];
    children?: ObjTreeConfigNode[];
}

interface ObjTreeRelation {
    parentKey: string;
    childKey: string;
}

interface ObjTreeConfigNode extends ObjTreeConfig, ObjTreeRelation {
    targetName: string;
}

const constructObjTree = (objTree: ObjTreeConfig): Object[] => {
    const childrenRecordGroups: { [parentKeyProp: string]: { [parentKey: string]: Object[] } } =
        objTree.children.reduce((res, childNode) => {
            const childrenByParent = groupBy(childRecord => childRecord[childNode.childKey], childNode.records);
            res[childNode.parentKey] = childrenByParent;
            return res;
        }, {});

    return objTree.records.map((parentRecord) => {
        const extension = objTree.children.reduce((res, { targetName, parentKey, children = [] }) => {
            const childRecords = childrenRecordGroups[parentKey][parentRecord[parentKey]];
            res[targetName] = constructObjTree({ records: childRecords, children });
            return res;
        }, {});

        return {
            ...parentRecord,
            ...extension
        };
    });
};

