export function* iterateDeep<T>(path: (string | number)[], input: T): IterableIterator<any> {
    const [prop, ...nextPath] = path;
    
    if (prop != null) {
        const next = input[prop];

        if (!input.hasOwnProperty(prop)) {
            return;
        }
        else if (Array.isArray(next)) {
            for (let item of next) {
                yield* iterateDeep(nextPath, item);
            }
        }
        else {
            yield* iterateDeep(nextPath, next);
        }
    } else if (Array.isArray(input)) {
        yield* input;
    } else {
        console.log(input)
        yield input;
    }
}