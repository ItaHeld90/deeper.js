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

        const projectedParentRecord = !objTree.projection 
            ? parentRecord
            : typeof objTree.projection === 'function'
                ? objTree.projection(parentRecord)
                : pick(objTree.projection as (keyof typeof parentRecord)[], parentRecord) as Object

        return {
            ...projectedParentRecord,
            ...extension
        };
    });
};
