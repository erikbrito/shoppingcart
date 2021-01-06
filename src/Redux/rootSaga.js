import { all, fork } from 'redux-saga/effects'

import load from './Home/Sagas'

export default function* rootSaga() {
  return yield all([
    fork (load),
  ])
}