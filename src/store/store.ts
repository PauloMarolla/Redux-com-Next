import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { counterReducer } from './counter/reducers';

const composeEnhancers =
	typeof window === 'object' &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

export type AppReducerState = {
	contador: number;
};

const appReducers = combineReducers({
	contador: counterReducer,
});

const middlewares = [];

middlewares.push(reduxThunk);

export const store = createStore(
	appReducers,
	composeEnhancers(applyMiddleware(...middlewares)),
);
