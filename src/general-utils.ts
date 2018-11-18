export const times = <T>(amount: number, fn: (idx: number) => T) => {
	const result = [];

	for (let i = 0; i < amount; i++) {
		result.push(fn(i));
	}

	return result;
};

export const tail = (arr: any[]) => arr.slice(1);

const identity = item => item;
export const compact = (arr: any[]) => arr.filter(identity);

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Predicate = ReturnType<boolean>;

export const complement = <T extends any[]>(fn: (...parmas: T) => boolean) => (...params: T) => !fn(...params);
