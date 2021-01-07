import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as CartActions from '../../Redux/Cart/Actions'

import { formatPrice } from '../../util/format'

import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import './checkout.scss'

import Modal from '../Modal/Modal'

const Checkout = () => {
  const Products = useSelector(state => state.cartReducer)

  const [modal, setModal] = useState(false)

  const totalPrice = formatPrice(
    useSelector(state =>
      state.cartReducer.reduce((total, product) => {
        return total + product.price * product.amount
      }, 0)
    )
  )

  const dispatch = useDispatch()

  function incrementAmount(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1))
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1))
  }

  function finish() {
    dispatch(CartActions.finishToShop())
      setModal(!modal)
  }

  return (
    <div id="body">
      {Products.length ? (
        <div id="container">

          <table id="ProductTable" >
            <thead>
              <tr>
                <th>IMAGEM</th>
                <th className="td-description">PRODUTO</th>
                <th>QTD</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(Products).map((index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={Products[index].image} alt={Products[index].title} />
                    </td>
                    <td className="td-description">
                      <span> {Products[index].description} </span>
                      <strong> {formatPrice(Products[index].price)} </strong>
                    </td>
                    <td>
                      <div>
                        <button onClick={() => decrementAmount(Products[index])}>
                          <MdRemoveCircleOutline size={20} color="#da552f" />
                        </button>
                        {Products[index].amount}
                        <button onClick={() => incrementAmount(Products[index])}>
                          <MdAddCircleOutline size={20} color="#da552f" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <footer>
            <button onClick={() => finish()}>Finalizar Compra</button>

            <div id="Total">
              <span>TOTAL</span>
              <strong>{totalPrice}</strong>
            </div>

          </footer>

        </div>) : (
          <div id="EmptyCart">
            <div>
              <h2>Oops...</h2>
              <p>Parece que seu carrinho de compras está vazio!</p>
              <Link id="StartShopping" to="/">Ir as compras</Link>
            </div>
          </div>
        )
      }
      { modal ? <Modal /> : null }
    </div>
  )
}

export default Checkout