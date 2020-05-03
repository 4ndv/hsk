import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import {
  Button, ListGroup, ListGroupItem, Progress
} from 'reactstrap'

import LearnCard from './LearnCard'
import Link from './Link'

const renderMistakes = (mistakes) => {
  if (mistakes.length === 0) return null

  const mistakesElements = mistakes.map((mistake) => {
    const { question } = mistake

    return (
      <ListGroupItem key={question.id}>
        <div>
          <b>Character: </b>
          {question.simplified}
        </div>
        <div>
          <b>Pinyin: </b>
          {question.pinyin}
        </div>
        <div>
          <b>Definitions: </b>
          {question.definitions.join('; ')}
        </div>
      </ListGroupItem>
    )
  })

  return (
    <>
      <h3>Mistakes</h3>
      <ListGroup>
        {mistakesElements}
      </ListGroup>
    </>
  )
}

const Learn = (props) => {
  const { data, config } = props
  const [position, setPosition] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [errors, setErrors] = useState([])
  const [finished, setFinished] = useState(false)

  console.log(data)

  useEffect(() => {
    setPosition(0)
    setCorrect(0)
    setErrors([])
    setFinished(false)
  }, [config])

  const submitResult = (result, timeout) => {
    const { word, selected } = result

    setTimeout(() => {
      setPosition(position + 1)

      if (selected.length === 1) {
        setCorrect(correct + 1)
      } else {
        setErrors([...errors, word])
      }
    }, timeout)
  }

  const finish = () => {
    setFinished(true)
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

  if (position >= data.length || finished) {
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
          {errors.length}
        </p>
        <p>
          Total answers:
          {' '}
          {correct + errors.length}
        </p>
        <p>
          <Button onClick={tryAgain}>Try again</Button>
          {errors.length > 0 ? <Button className="ml-1" onClick={retryIncorrect}>Retry incorrect</Button> : null}
          <Link href="/"><Button className="ml-1">Return to home</Button></Link>
        </p>
        {renderMistakes(errors)}
      </>
    )
  }

  return (
    <>
      <Progress multi className="mb-1">
        <Progress bar color="success" value={(100.0 / data.length) * correct} />
        <Progress bar color="danger" value={(100.0 / data.length) * errors.length} />
      </Progress>

      <LearnCard
        word={data[position]}
        key={position}
        submitResult={submitResult}
        config={config}
        finish={finish}
      />
    </>
  )
}

Learn.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  config: PropTypes.object.isRequired
}

export default Learn
