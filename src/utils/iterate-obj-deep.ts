import { tail } from "./general-utils";

export interface DeepIteratee {
    root: any;
    value: any;
    [others: string]: any;
};

// type Path<T1, T2, T3, T4, T5> = [T1] | [T1, T2] | [T1, T2, T3] | [T1, T2, T3, T4] | [T1, T2, T3, T4, T5];
type Path = (string | number)[];

export function* iterateObjDeep<T,
    // T1 extends keyof T,
    // T2 extends keyof T[T1],
    // T3 extends keyof T[T1][T2],
    // T4 extends keyof T[T1][T2][T3],
    // T5 extends keyof T[T1][T2][T3][T4],
    >
    (path: Path/* Path<T1, T2, T3, T4, T5> */, input: T): IterableIterator<DeepIteratee> {
    const defaultData = { value: undefined };

    if (Array.isArray(input)) {
        for (let item of input) {
            yield* recurse(path, item, { ...defaultData, root: item });
        }
    } else {
        yield* recurse(path, input, { ...defaultData, root: input });
    }

    function* recurse(path: Path/* Path<T1, T2, T3, T4, T5> */, input: T, data: DeepIteratee): IterableIterator<DeepIteratee> {
        const prop = path[0];

        const accessProp = !Array.isArray(input) && prop != null;
        const next = accessProp ? input[prop] : input;

        if (next == null) {
            return;
        }

        const nextPath = accessProp ? tail(path) : path;

        // the deepest level should be saved under 'value'
        const resultPropName = nextPath.length > 0
            ? prop
            : 'value';

        if (Array.isArray(next)) {
            for (let item of next) {
                const nextExtraData = accessProp
                    ? { ...data, [resultPropName]: item }
                    : data

                //@ts-ignore
                yield* recurse(nextPath, item, nextExtraData)
            }
        } else {
            if (accessProp) {
                //@ts-ignore
                yield* recurse(nextPath, next, { ...data, [resultPropName]: next });
            } else {
                yield data;
            }
        }
    }
}