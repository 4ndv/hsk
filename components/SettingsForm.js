import React from 'react'
import PropTypes from 'prop-types'

import { useForm, Controller } from 'react-hook-form'

import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap'

import ButtonCheckboxGroup from './ButtonCheckboxGroup'

const SettingsForm = (props) => {
  const { onSubmit } = props

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      levels: [1, 2, 3, 4],
      wordsLimit: 0,
      modes: ['characters-pinyin'],
      alwaysShowPinyin: false,
      alwaysShowTranslation: false
    }
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="levels">HSK Levels (all levels does not include previous ones)</Label>
        <div>
          <Controller
            as={ButtonCheckboxGroup}
            control={control}
            rules={{ required: true }}
            options={[
              { value: 1, label: 'HSK 1' },
              { value: 2, label: 'HSK 2' },
              { value: 3, label: 'HSK 3' },
              { value: 4, label: 'HSK 4' },
              { value: 5, label: 'HSK 5' },
              { value: 6, label: 'HSK 6' }
            ]}
            name="levels"
            valueName="selected"
            color="secondary"
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="words-limit">Words limit (0 = disabled)</Label>
        <Input
          type="number"
          name="wordsLimit"
          placeholder="0"
          id="words-limit"
          min={0}
          innerRef={register()}
        />
      </FormGroup>
      <FormGroup className="mb-0">
        <Label for="modes">Modes (if multiple selected modes will be randomized)</Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="modes"
            value="characters-pinyin"
            innerRef={register()}
          />
          {' '}
          Select pinyin for characters
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="modes"
            value="pinyin-characters"
            innerRef={register()}
          />
          {' '}
          Select characters for pinyin
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="modes"
            value="characters-translation"
            innerRef={register()}
          />
          {' '}
          Select translation for characters
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="modes"
            value="translation-characters"
            innerRef={register()}
          />
          {' '}
          Select characters for translation
        </Label>
      </FormGroup>
      <FormGroup className="mb-0 mt-2">
        <Label for="modes">Other settings</Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="alwaysShowPinyin"
            innerRef={register()}
          />
          {' '}
          Always show pinyin
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="alwaysShowTranslation"
            innerRef={register()}
          />
          {' '}
          Always show definition
        </Label>
      </FormGroup>
      <FormGroup className="mt-3">
        <Button type="submit" color="primary" size="lg">Start</Button>
      </FormGroup>
    </Form>
  )
}

SettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SettingsForm
