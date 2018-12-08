import { flatMapObjDeep } from "./flat-map-obj-deep";
import { omit } from "../utils/general-utils";
import { ObjTreeConfig } from "../utils/general-types";

export const deconstructObjTree = (tree: ObjTreeConfig, records: Object[]): { [name: string]: any[] } => {
    const { children = [] } = tree;
    const childrenNames = children.map(c => c.name);

    return {
        [tree.name]: records.map(r => omit(childrenNames as (keyof typeof r)[], r)),
        ...(children.reduce((res, subTree) => {
            const { name, childKey, parentKey } = subTree;

            const childRecords = flatMapObjDeep(
                ({ root, value }) => ({ ...value, [childKey]: root[parentKey] }),
                [name],
                records
            );
            return Object.assign(res, deconstructObjTree(subTree, childRecords));
        }, {}))
    }
}