import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Hider = (props) => {
  const { children, caption, enabled } = props
  const [hidden, setHidden] = useState(true)

  const toggleHidden = () => {
    setHidden(!hidden)
  }

  if (!hidden || !enabled) {
    return children
  }

  return (
    <span
      style={{ textDecoration: 'underline', cursor: 'pointer' }}
      onClick={toggleHidden}
      role="button"
    >
      {caption}
    </span>
  )
}

Hider.propTypes = {
  enabled: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  caption: PropTypes.string.isRequired
}

export default Hider
