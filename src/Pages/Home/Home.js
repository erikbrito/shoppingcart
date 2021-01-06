import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loadRequest } from '../../Redux/Home/Actions'
import * as CartActions from '../../Redux/Cart/Actions'

import { formatPrice } from '../../util/format'

import './home.scss'

const Home = () => {
  const Products = useSelector(state => state.homeReducer.products)
  const Categories = useSelector(state => state.homeReducer.categories)
  const dispatch = useDispatch()

  const [numberId, setNumberId] = useState(0)

  function handleAddProduct(products) {
    dispatch(CartActions.addToCart(products))
  }
  useEffect(() => {
    loadRequest()
  }, [])

  return (
    <div id="body">
      
      <select onChange={e => setNumberId(Number(e.target.value))}>
        {Object.keys(Categories).map((c, index) => (<option key={index} value={Categories[index].id}> {Categories[index].name} </option>))}
      </select>

      <div id="home">
        <ul>
          {Object.keys(Products).map((index) => {
            if (numberId !== Products[index].idCategory) return null

            return (
              <li key={index}>
                <img src={Products[index].image} alt={Products[index].name} />
                <strong> {Products[index].name} </strong>
                <span> {Products[index].description} </span>
                <span> {formatPrice(Products[index].price)} </span>
                <button onClick={() => handleAddProduct(Products[index])}> <span> ADICIONAR AO CARRINHO </span> </button>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home