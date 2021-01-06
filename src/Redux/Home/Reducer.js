// import { actionsTypes } from './Constant'
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE
} from './Constant';

const INITIAL_STATE = {
  products: [],
  categories: [],
  error: false,
  loading: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return { ...state, products: action.payload.products, categories: action.payload.categories };
    case LOAD_FAILURE:
      return { ...state, loading: false, error: true, products: [] };
    default:
      return state
  }
}

export default homeReducer