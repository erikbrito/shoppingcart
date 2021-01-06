import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loadRequest } from '../../Redux/Home/Actions'
import * as CartActions from '../../Redux/Cart/Actions';

const Home = () => {
  const Products = useSelector(state => state.homeReducer.products)
  const Categories = useSelector(state => state.homeReducer.categories)
  const dispatch = useDispatch()

  const [numberId, setNumberId] = useState(0)

  function handleAddProduct(products) {
    dispatch(CartActions.addToCart(products));
  }
  useEffect(() => {
    loadRequest()
  }, []);

  return (
    <div className="App">

      <h1>Home</h1>

      <select onChange={e => setNumberId(Number(e.target.value))}>
        {Object.keys(Categories).map((c, index) => (<option key={index} value={Categories[index].id}> {Categories[index].name} </option>))}
      </select>

      <div>
        <ul>
          {Object.keys(Products).map((index) => {
            if (numberId !== Products[index].idCategory) return null

            return (<li key={index}> {Products[index].name} <button onClick={() => handleAddProduct(Products[index])}>Add</button> </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home