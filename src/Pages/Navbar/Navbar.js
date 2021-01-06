import React from 'react'
// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const Cart = useSelector(state => state.cartReducer)

  console.log(Cart)

  return (
    <div>
      <div>
        <Link to="/checkout">checkout</Link>
      </div>
      <div>
        <h1> {Cart.length} </h1>
      </div>
    </div>
  )
}

export default Navbar