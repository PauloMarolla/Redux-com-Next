import { CONTADOR_ADICIONAR, CONTADOR_REMOVER } from './types';

export const adicionarContador = () => ({
	type: CONTADOR_ADICIONAR,
});

export const removerContador = () => ({
	type: CONTADOR_REMOVER,
});
