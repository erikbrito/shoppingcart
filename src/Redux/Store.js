import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { reducers } from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'cart',
  storage
}

const SagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(SagaMiddleware))
const persistor = persistStore(store)

SagaMiddleware.run(rootSaga);

export { store, persistor }