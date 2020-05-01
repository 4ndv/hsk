import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardBody, Button, Row, Col, Badge
} from 'reactstrap'

import { useHotkeys } from 'react-hotkeys-hook'

import Hider from './Hider'

const renderQuestion = (config, question, type) => {
  const { hidePinyin } = config

  switch (type) {
    case 'characters-pinyin':
      return <div className="question">{question.simplified}</div>
    case 'pinyin-characters':
      return <div className="question">{question.pinyin}</div>
    case 'characters-translation':
      return (
        <>
          <div className="question">{question.simplified}</div>
          <div className="comment">
            <Hider
              enabled={hidePinyin}
              caption="Show pinyin"
            >
              {question.pinyin}
            </Hider>
          </div>
        </>
      )
    case 'translation-characters':
      return <div className="question">{question.definitions[0]}</div>
    default:
      return 'None'
  }
}

const renderAnswerText = (answer, type) => {
  switch (type) {
    case 'characters-pinyin':
      return answer.pinyin
    case 'pinyin-characters':
      return answer.simplified
    case 'characters-translation':
      return answer.definitions[0]
    case 'translation-characters':
      return `${answer.simplified} (${answer.pinyin})`
    default:
      return 'None'
  }
}

const LearnCard = (props) => {
  const {
    word, submitResult, config, finish
  } = props

  const { question, variants, type } = word
  const [selected, setSelected] = useState([])
  const [disableAll, setDisableAll] = useState(false)

  const selectAnswer = (index, correct) => {
    if (disableAll) return null

    const newSelected = [index, ...selected]

    if (correct) {
      submitResult({ word, selected: newSelected })
      setDisableAll(true)
    }

    setSelected(newSelected)

    return null
  }

  const skip = () => {
    if (disableAll) return null

    const newSelected = [0, 1, 2, 3]

    submitResult({ word, selected: newSelected })

    setSelected(newSelected)
    setDisableAll(true)

    return null
  }

  useHotkeys('1,2,3,4,space', (event, { key }) => {
    if (key === 'space') {
      skip()
    } else {
      const index = +key - 1

      const correct = variants.findIndex((item) => question.simplified === item.simplified)

      selectAnswer(index, index === correct)
    }
  }, [selected])

  const renderAnswer = (index, variant, correct) => {
    const isSelected = selected.includes(index)
    const correctColor = correct ? 'success' : 'danger'
    const color = !isSelected ? 'secondary' : correctColor

    return (
      <Col lg={6} md={12} sm={12} className="mb-4">
        <Button
          block
          color={color}
          disabled={isSelected}
          key={index}
          onClick={() => selectAnswer(index, correct)}
          size="lg"
        >
          <Badge color="dark" className="float-left mt-1">{index + 1}</Badge>
          {' '}
          <span className="mr-4">{renderAnswerText(variant, type)}</span>
        </Button>
      </Col>
    )
  }

  return (
    <>
      <Card className="learn-card mb-4">
        <CardBody>
          <div className="question">
            {renderQuestion(config, question, type)}
          </div>
        </CardBody>
      </Card>
      <Row>
        {
          variants.map(
            (variant, i) => renderAnswer(
              i,
              variant,
              question.simplified === variant.simplified
            )
          )
        }
        <Col lg={12}>
          <Button
            block
            color="warning"
            onClick={() => skip()}
            size="lg"
            className="mb-4"
          >
            <Badge color="dark">Space</Badge>
            {' '}
            Skip
          </Button>
        </Col>
        <Col lg={12}>
          <Button
            block
            color="dark"
            onClick={() => finish()}
            size="lg"
          >
            Finish
          </Button>
        </Col>
      </Row>
    </>
  )
}

LearnCard.propTypes = {
  word: PropTypes.object.isRequired,
  submitResult: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  finish: PropTypes.func.isRequired
}

export default LearnCard
