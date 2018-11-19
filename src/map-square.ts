export const mapSquare = <T, P>(mapperFn: (item: T, idxs: number[]) => P, arr: RecursiveArray<T>) => {
    function recurse(input: RecursiveItem<T>, idxs: number[]) {
        return Array.isArray(input)
            ? input.map((item, idx) => recurse(item, [...idxs, idx]))
            : mapperFn(input, idxs);
    }

    return recurse(arr, []);
}