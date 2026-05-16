import React from 'react'
import PropTypes from 'prop-types'
import myStore from './store'

const Luana = props => {
  const {counter} = myStore();
  return (
    <div>
        Luana {counter}
    </div>
  )
}

Luana.propTypes = {}

export default Luana