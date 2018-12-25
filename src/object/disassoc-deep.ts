import { PropsPath } from '../utils/general-types';
import { omit } from '../utils/general-utils';

export function disassocDeep(path: PropsPath, obj: Object): Object {
	function recurse(path: PropsPath, input: any) {
		const [prop, ...restPath] = path;

		return !restPath.length
			? omit([prop], input)
			: {
					...input,
					[prop]: recurse(restPath, input[prop]),
			  };
	}

	return recurse(path, obj);
}
