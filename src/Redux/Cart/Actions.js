import ActionsCart from './Constant'

export function addToCart(products) {
  return {
    type: ActionsCart.ADD_CART,
    products
  }
}

export function removeToCart(products) {
  return {
    type: ActionsCart.REMOVE_CART,
    products
  }
}

export function updateAmount(id, amount) {
  return {
    type: ActionsCart.UPDATE_AMOUNT,
    id,
    amount,
  }
}

export function finishToShop() {
  return {
    type: ActionsCart.FINISH_TO_SHOP
  }
}
