import { bindActionCreators } from 'redux';
import { AuthTypes } from './types';

type AuthUser = {
	email: string;
	password: string;
};

type AuthState = {
	loading: boolean;
	error: null | string;
	data: null | AuthUser;
};

const initialState: AuthState = {
	loading: false,
	error: null,
	data: null,
};

type Action = {
	type: AuthTypes;
	payload?: AuthUser;
};

export const authReducer = (
	state: AuthState = initialState,
	action: Action,
) => {
	switch (action.type) {
		case '@AUTH/SIGN_IN_START':
			return {
				...initialState,
				loading: true,
			};

		default:
			return state;
	}
};
