import { RecursiveItem } from '../general-types';

export function* iterateDeep<T>(input: RecursiveItem<T>): IterableIterator<[T, number[]]> {
    yield* iterateBody(input, []);
}

function* iterateBody<T>(input: RecursiveItem<T>, idxs: number[]): IterableIterator<[T, number[]]> {
	if (Array.isArray(input)) {
		for (let [idx, item] of input.entries()) {
			yield* iterateBody(item, [...idxs, idx]);
		}
	} else {
		yield [input, idxs];
	}
}
