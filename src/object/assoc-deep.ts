import { PropsPath } from '../utils/general-types';
import { tail } from "../utils/general-utils";

export function assocDeep(path: PropsPath, value: any, obj: Object): Object {
	function recurse(path: PropsPath, input: any) {
		if (!path.length) {
			return value;
		}

		const prop = path[0];

		return {
			...input,
			[prop]: recurse(tail(path), input[prop]),
		};
	}

	return recurse(path, obj);
}