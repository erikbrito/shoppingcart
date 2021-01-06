import { combineReducers } from 'redux'

import homeReducer from './Home/Reducer'
import cartReducer from './Cart/Reducer'

const reducers = combineReducers ({
  homeReducer,
  cartReducer
})

export { reducers }