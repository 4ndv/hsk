import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LearnCard from './LearnCard'

const Learn = (props) => {
  const { data } = props
  const [position, setPosition] = useState(0)
  const [correct, setCorrect] = useState(0)

  console.log(data)

  const submitResult = (result) => {
    setTimeout(() => {
      setPosition(position + 1)

      if (result.length === 1) setCorrect(correct + 1)
    }, 500)
  }

  if (position >= data.length) {
    return (
      <>
        <h3>
          <span role="img" aria-label="hooray">🎉</span>
          {' '}
          You&apos;ve answered all the questions!
        </h3>
        <p>
          Correct answers:
          {' '}
          {correct}
        </p>
        <p>
          Incorrect answers:
          {' '}
          {data.length - correct}
        </p>
        <p>
          Total answers:
          {' '}
          {data.length}
        </p>
      </>
    )
  }

  return (
    <LearnCard word={data[position]} key={position} submitResult={submitResult} />
  )
}

Learn.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Learn
