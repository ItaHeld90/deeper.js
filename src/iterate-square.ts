import { RecursiveItem } from './general-types';

export function* iterateDeep<T>(input: RecursiveItem<T>) {
	if (Array.isArray(input)) {
		for (let item of input) {
			yield* iterateDeep(item);
		}
	} else {
		yield input;
	}
}
