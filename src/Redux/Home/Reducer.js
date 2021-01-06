import HomeCart from './Constant'

const INITIAL_STATE = {
  products: [],
  categories: [],
  error: false,
  loading: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeCart.LOAD_REQUEST:
      return { ...state, loading: true }
    case HomeCart.LOAD_SUCCESS:
      return { ...state, products: action.payload.products, categories: action.payload.categories }
    case HomeCart.LOAD_FAILURE:
      return { ...state, loading: false, error: true, products: [] }
    default:
      return state
  }
}

export default homeReducer