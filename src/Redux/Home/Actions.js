import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from './Constant';

export function loadRequest() {
  return {
    type: LOAD_REQUEST
  }
}

export function loadSuccess(products, categories) {
  return {
    type: LOAD_SUCCESS,
    payload: { products, categories }
  }
}

export function loadFailure() {
  return {
    type: LOAD_FAILURE
  }
}