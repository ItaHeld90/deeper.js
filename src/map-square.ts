export const mapSquare = (mapperFn: (item: any, idxs: number[]) => any, arr: any) => {
    function recurse(input: any, idxs: number[]) {
        return Array.isArray(input)
            ? input.map((item, idx) => recurse(item, [...idxs, idx]))
            : mapperFn(input, idxs);
    }

    return recurse(arr, []);
}