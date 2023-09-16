import { produce } from 'immer';
import ActionsCart from './Constant';

const cartReducer = (state = [], action) => {

  switch (action.type) {
    case ActionsCart.ADD_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.products.id)
        if (productIndex >= 0) {
          draft[productIndex].amount += 1
        } else {
          draft.push({ ...action.products, amount: 1 })
        }
      })
    case ActionsCart.REMOVE_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.products.id)
        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    case ActionsCart.UPDATE_AMOUNT:
      if (action.amount <= 0) {
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id)
          if (productIndex >= 0) {
            draft.splice(productIndex, 1)
          }
        })
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
      case ActionsCart.FINISH_TO_SHOP:
      return state = []
    default:
      return state
  }
}

export default cartReducer