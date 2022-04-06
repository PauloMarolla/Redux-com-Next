import { CONTADOR_ADICIONAR, CONTADOR_REMOVER } from './types';

type Action = {
	type: typeof CONTADOR_ADICIONAR | typeof CONTADOR_REMOVER;
	payload?: any;
};

export type CounterReducer = number;

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case CONTADOR_ADICIONAR:
			return state + 1;

		case CONTADOR_REMOVER:
			return state - 1;

		default:
			return state;
	}
}
