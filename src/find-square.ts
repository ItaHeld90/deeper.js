import { iterateDeep } from "./iterate-square";
import { RecursiveArray } from "./general-types";

export const findSquare = <T>(predicateFn: (item: T) => boolean, arr: RecursiveArray<T>): T => {
    for (let item of iterateDeep(arr)) {
        if (predicateFn(item)) {
            return item;
        }
    }

    return undefined;
}