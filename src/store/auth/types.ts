export const SIGN_IN_START = '@AUTH/SIGN_IN_START';
export const SIGN_IN_COMPLETE = '@AUTH/SIGN_IN_COMPLETE';
export const SIGN_IN_ERROR = '@AUTH/SIGN_IN_ERROR';

export type AuthTypes =
	| '@AUTH/SIGN_IN_START'
	| '@AUTH/SIGN_IN_COMPLETE'
	| '@AUTH/SIGN_IN_ERROR';
