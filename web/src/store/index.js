import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createSore from './createStore';

import persistReducers from './modules/persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createSore(persistReducers(rootReducer), middlewares);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
