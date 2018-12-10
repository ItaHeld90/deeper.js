import { tail, createPath } from './general-utils';
import { DeepIteratee, Path, PropsPath } from './general-types';

export function* iterateObjDeep<T>(path: Path<T>, input: T): IterableIterator<DeepIteratee> {
	const calcuatedPath: PropsPath = typeof path === 'function' ? createPath(path, input) : path;
	const defaultData = { value: undefined };

	if (Array.isArray(input)) {
		for (let item of input) {
			yield* recurse(calcuatedPath, item, { ...defaultData, root: item });
		}
	} else {
		yield* recurse(calcuatedPath, input, { ...defaultData, root: input });
	}

	function* recurse(path: PropsPath, input: T, data: DeepIteratee): IterableIterator<DeepIteratee> {
		const prop = path[0];

		const accessProp = !Array.isArray(input) && prop != null;
		const next = accessProp ? input[prop] : input;

		if (next == null) {
			return;
		}

		const nextPath = accessProp ? tail(path) : path;

		// the deepest level should be saved under 'value'
		const resultPropName = nextPath.length > 0 ? prop : 'value';

		if (Array.isArray(next)) {
			for (let item of next) {
				const nextExtraData = accessProp ? { ...data, [resultPropName]: item } : data;

				//@ts-ignore
				yield* recurse(nextPath, item, nextExtraData);
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
