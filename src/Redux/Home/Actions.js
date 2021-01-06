import HomeCart from './Constant'

export function loadRequest() {
  return {
    type: HomeCart.LOAD_REQUEST
  }
}

export function loadSuccess(products, categories) {
  return {
    type: HomeCart.LOAD_SUCCESS,
    payload: { products, categories }
  }
}

export function loadFailure() {
  return {
    type: HomeCart.LOAD_FAILURE
  }
}