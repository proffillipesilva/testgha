import React from 'react'
import PropTypes from 'prop-types'
import store from '../store/store'

const HomePage = props => {
  const {user} = store();
  return (
    <div>
        <nav>
            <span>
                 {user.nome} <img width={50} src={user.imagem} />
            </span>
        </nav>
        HomePage
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage