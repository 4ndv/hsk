import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardBody, Button, Row, Col
} from 'reactstrap'

const renderQuestion = (question, type) => {
  switch (type) {
    case 'characters-pinyin':
      return question.simplified
    case 'pinyin-characters':
      return question.pinyin
    case 'characters-translation':
      return question.simplified
    case 'translation-characters':
      return question.definitions[0]
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
      return answer.simplified
    default:
      return 'None'
  }
}

const LearnCard = (props) => {
  const { word, submitResult } = props
  const { question, variants, type } = word
  const [selected, setSelected] = useState([])

  const selectAnswer = (index, correct) => {
    const newSelected = [index, ...selected]

    if (correct) return submitResult(newSelected)

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
            {renderQuestion(question, type)}
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
  submitResult: PropTypes.func.isRequired
}

export default LearnCard
