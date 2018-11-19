import { RecursiveArray } from "../utils/general-types";
import { iterateDeep } from "../utils/iterate-square";

export const reduceSquare = <T, P>(
	reducerFn: (acc: P, item: T, idxs: number[]) => P,
	initial: P,
	arr: RecursiveArray<T>[]
): P => {
    let result = initial;

    for (let [item, idxs] of iterateDeep(arr)) {
        result = reducerFn(result, item, idxs);
    }

    return result;
};
