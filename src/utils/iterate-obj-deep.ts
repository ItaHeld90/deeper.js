export function* iterateObjDeep<T>(path: (string | number)[], input: T): IterableIterator<any> {
    const [prop, ...nextPath] = path;
    
    if (prop != null) {
        const next = input[prop];

        if (!input.hasOwnProperty(prop)) {
            return;
        }
        else if (Array.isArray(next)) {
            for (let item of next) {
                yield* iterateObjDeep(nextPath, item);
            }
        }
        else {
            yield* iterateObjDeep(nextPath, next);
        }
    } else if (Array.isArray(input)) {
        yield* input;
    } else {
        console.log(input)
        yield input;
    }
}