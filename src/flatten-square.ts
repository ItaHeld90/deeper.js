export const flattenSquare = (arr: any): any => {
	function recurse(result: any[], input: any) {
		return Array.isArray(input) ? input.reduce(recurse, result) : [...result, input];
	}

	return recurse([], arr);
};
