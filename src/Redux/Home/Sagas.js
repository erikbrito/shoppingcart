import { call, put } from 'redux-saga/effects'
import api from '../../Services/api'
import { loadSuccess, loadFailure } from './Actions'

export default function* load() {
  try {
    const products = yield call(api.get, 'products')
    const categories = yield call(api.get, 'categories')
    
    yield put(loadSuccess(products.data, categories.data))
  } catch (err) {
    yield put(loadFailure())
  }
}