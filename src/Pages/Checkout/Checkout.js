// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as CartActions from '../../Redux/Cart/Actions';

import { formatPrice } from '../../util/format';

const Checkout = () => {
  const Products = useSelector(state => state.cartReducer)

  const totalPrice = formatPrice(
    useSelector(state =>
      state.cartReducer.reduce((total, product) => {
        return total + product.price * product.amount
      }, 0)
    )
  )

  // const [numberId, setNumberId] = useState(0)
  // const [categories, setCategories] = useState([])
  // const [products, setProducts] = useState([])
  // const [sum, setSum] = useState()
  // const [total, setTotal] = useState()

  // console.log(Checkout)

  const dispatch = useDispatch()

  function incrementAmount(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }
  
  function finish() {
    dispatch(CartActions.finishToShop());
  }

  return (
    <div>
      <h1>checkout</h1>

      <div>
        <ul>
          {Object.keys(Products).map((index) => {
            return (
              <li key={index}>
                  {Products[index].name}
                <button onClick={() => decrementAmount(Products[index])}>-</button>
                  {Products[index].amount}
                <button onClick={() => incrementAmount(Products[index])}>+</button>
              </li>
              )
          })}
        </ul>
        <strong>{totalPrice}</strong>
        <button onClick={() => finish()}>Finalizar Compra</button>
      </div>
    </div>
  )
}

export default Checkout