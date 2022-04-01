import { createStore, compose, applyMiddleware } from 'redux'
import { logActions, reportError } from './middleware';
import { pokemonReducer } from './reducers/pokemonReducer';
// import { pokemonSaga } from './sagas';
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const composedEnhancers = composeAlt(
	applyMiddleware(logActions, reportError)
)

export const store = createStore( pokemonReducer, composedEnhancers )

// sagaMiddleware.run(pokemonSaga);