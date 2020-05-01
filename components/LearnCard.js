import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardBody, Button, Row, Col
} from 'reactstrap'

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
  const { word, submitResult, config } = props
  const { question, variants, type } = word
  const [selected, setSelected] = useState([])

  const selectAnswer = (index, correct) => {
    const newSelected = [index, ...selected]

    if (correct) submitResult(newSelected)

    setSelected(newSelected)

    return null
  }

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
          {renderAnswerText(variant, type)}
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
      </Row>
    </>
  )
}

LearnCard.propTypes = {
  word: PropTypes.object.isRequired,
  submitResult: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
}

export default LearnCard
