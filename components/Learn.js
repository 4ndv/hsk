import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { Button } from 'reactstrap'

import LearnCard from './LearnCard'
import Link from './Link'

const Learn = (props) => {
  const { data, config } = props
  const [position, setPosition] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [errors, setErrors] = useState([])

  console.log(data)

  useEffect(() => {
    setPosition(0)
    setCorrect(0)
    setErrors([])
  }, [config])

  const submitResult = (result) => {
    const { word, selected } = result

    setTimeout(() => {
      setPosition(position + 1)

      if (selected.length === 1) {
        setCorrect(correct + 1)
      } else {
        setErrors([...errors, word])
      }
    }, 500)
  }

  const tryAgain = () => {
    window.location.reload()
  }

  const retryIncorrect = () => {
    Router.push({
      pathname: '/learn',
      query: {
        config: JSON.stringify({
          ...config,
          forceIds: errors.map((error) => error.id)
        })
      }
    })
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
        <p>
          <Button onClick={tryAgain}>Try again</Button>
          {errors.length > 0 ? <Button className="ml-1" onClick={retryIncorrect}>Retry incorrect</Button> : null}
          <Link href="/"><Button className="ml-1">Return to home</Button></Link>
        </p>
      </>
    )
  }

  return (
    <LearnCard word={data[position]} key={position} submitResult={submitResult} config={config} />
  )
}

Learn.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  config: PropTypes.object.isRequired
}

export default Learn
