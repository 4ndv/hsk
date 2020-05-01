import React, { useState, useEffect } from 'react'

import {
  FormGroup, Input, Col, Table, Row
} from 'reactstrap'

import MainNav from '~/components/MainNav'
import SiteLayout from '~/components/SiteLayout'

import { levelWords } from '~/lib/learn'

const renderTable = (level, words) => {
  if (words.length === 0) return null

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Character</th>
          <th>Pinyin</th>
          <th>Definitions</th>
        </tr>
      </thead>
      <tbody>
        {
          words.map((word, index) => {
            const key = `${level}-${index}`

            return (
              <tr key={key}>
                <td>{index + 1}</td>
                <td>{word.simplified}</td>
                <td>{word.pinyin}</td>
                <td>{word.definitions.join('; ')}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default function Dictionary() {
  const [words, setWords] = useState([])
  const [level, setLevel] = useState(0)

  useEffect(() => {
    if (level === 0) {
      setWords([])
      return undefined
    }

    setWords(levelWords(level))

    return undefined
  }, [level])

  return (
    <SiteLayout>
      <MainNav activeLink="dictionary" />
      <h3>Dictionary</h3>
      <FormGroup row>
        <Col>
          <Input type="select" name="select" id="levelSelect" onChange={(e) => setLevel(+e.target.value)}>
            <option value={0}>Select HSK level</option>
            <option value={1}>HSK 1</option>
            <option value={2}>HSK 2</option>
            <option value={3}>HSK 3</option>
            <option value={4}>HSK 4</option>
            <option value={5}>HSK 5</option>
            <option value={6}>HSK 6</option>
          </Input>
        </Col>
      </FormGroup>
      <Row>
        <Col>
          {renderTable(level, words)}
        </Col>
      </Row>
    </SiteLayout>
  )
}
