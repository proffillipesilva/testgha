import React from 'react'
import PropTypes from 'prop-types'
import myStore from './store'

const Ana = props => {
  const {increment} = myStore();
  return (
    <div>
        Ana
        <button onClick={increment} >
            Incrementar
        </button>
    </div>
  )
}

Ana.propTypes = {}

export default Ana