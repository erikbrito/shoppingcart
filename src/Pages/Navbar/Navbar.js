import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import './navbar.scss'

const Navbar = () => {
  const Cart = useSelector(state => state.cartReducer)

  return (
    <header id="main-header">
      <Link id="logo" to="/">
        <AiFillShopping size={36} color="#FFF" />
        <strong>Shopping Cart</strong>
      </Link>

      <Link id="link" to="/checkout">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {Cart.length} {Cart.length > 1 ? 'itens' : 'item'}
          </span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Link>
    </header>
  )
}

export default Navbar