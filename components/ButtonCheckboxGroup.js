import React from 'react'
import PropTypes from 'prop-types'

import { ButtonGroup, Button } from 'reactstrap'

const ButtonCheckboxGroup = (props) => {
  const {
    size, color, options, selected, onChange, disabled
  } = props

  const toggle = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((s) => s !== value))
    } else {
      onChange([value, ...selected])
    }
  }

  return (
    <ButtonGroup size={size} toggle>
      {
        options.map((option) => {
          return ([
            <Button
              key={option.value}
              color={color}
              disabled={disabled}
              active={selected.includes(option.value)}
              onClick={() => toggle(option.value)}
            >
              {option.label}
            </Button>
          ])
        })
      }
    </ButtonGroup>
  )
}

ButtonCheckboxGroup.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.array,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
}

ButtonCheckboxGroup.defaultProps = {
  size: 'md',
  color: 'primary',
  disabled: false,
  selected: [],
  onChange: () => {}
}

export default ButtonCheckboxGroup
