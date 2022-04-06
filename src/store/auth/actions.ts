import { SIGN_IN_COMPLETE, SIGN_IN_ERROR, SIGN_IN_START } from './types';

export type AuthUser = {
	email: string;
	password: string;
};

export const signInStart = () => ({
	type: SIGN_IN_START,
});

export const signInComplete = (account: AuthUser) => ({
	type: SIGN_IN_COMPLETE,
	payload: account,
});

export const signInError = (errorCode: string) => ({
	type: SIGN_IN_ERROR,
	payload: errorCode,
});
