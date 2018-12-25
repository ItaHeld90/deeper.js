import { PropsPath } from '../utils/general-types';

export function assocDeep(path: PropsPath, value: any, obj: Object): Object {
	function recurse(path: PropsPath, input: any) {
		if (!path.length) {
			return value;
		}

		const [prop, ...restPath] = path;

		return {
			...input,
			[prop]: recurse(restPath, input[prop]),
		};
	}

	return recurse(path, obj);
}