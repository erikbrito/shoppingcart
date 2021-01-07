import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillCheckCircle } from 'react-icons/ai';

import './modal.scss'

const Modal = () => {

  return (
    <div id="modal-all">

      <div id="modal-content">
        <ul id="modal-list">
          <li>
            <AiFillCheckCircle size={80} color="#1cca39" />
          </li>

          <li>
            <strong>Pedido realizado com sucesso!</strong>
          </li>

          <li>
            <Link id="button-finish" to="/">
              FINALIZAR
            </Link>
          </li>

        </ul>
      </div>

      <div id="modal-bg" />

    </div>
  )
}

export default Modal