import random from 'lodash/random'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import sample from 'lodash/sample'
import shuffle from 'lodash/shuffle'
import slice from 'lodash/slice'
import flatten from 'lodash/flatten'

import hsk1 from '~/words/hsk1'
import hsk2 from '~/words/hsk2'
import hsk3 from '~/words/hsk3'
import hsk4 from '~/words/hsk4'
import hsk5 from '~/words/hsk5'
import hsk6 from '~/words/hsk6'

export function levelWords(level) {
  switch (level) {
    case 1:
      return hsk1
    case 2:
      return hsk2
    case 3:
      return hsk3
    case 4:
      return hsk4
    case 5:
      return hsk5
    case 6:
      return hsk6
    default:
      return {}
  }
}

export function nRandomDigitsWithoutRepetitionExcluding(count, max, exclude) {
  const digits = []

  while (uniq(digits).length !== count) {
    const digit = random(0, max)

    if (digit !== exclude) digits.push(digit)
  }

  return uniq(digits)
}

export function selectNWords(words, count, exclude) {
  return map(
    nRandomDigitsWithoutRepetitionExcluding(count, words.length - 1, exclude),
    (d) => words[d]
  )
}

export function buildFromConfig(config) {
  // Ignore every other setting except modes
  if (Array.isArray(config.forceIds) && config.forceIds.length > 0) {
    const levelsMap = config.forceIds.reduce((obj, item) => {
      const [level, index] = item.split('-')

      if (!Array.isArray(obj[level])) {
        // eslint-disable-next-line no-param-reassign
        obj[level] = []
      }

      // eslint-disable-next-line no-param-reassign
      obj[level] = [...obj[level], index]

      return obj
    }, {})

    const data = []

    Object.keys(levelsMap).map((d) => +d).forEach((level) => {
      const words = levelWords(level)

      const selectedWords = levelsMap[level].map((index) => {
        const word = words[+index]
        const variants = [word, ...selectNWords(words, 3, index)]

        return {
          id: `${level}-${index}`,
          type: sample(config.modes),
          question: word,
          variants: shuffle(variants)
        }
      })

      data.push(selectedWords)
    })

    return shuffle(flatten(data))
  }

  const data = shuffle(
    flatten(
      config.levels.map((level) => {
        const words = levelWords(level)

        return map(words, (word, index) => {
          const variants = [word, ...selectNWords(words, 3, index)]

          return {
            id: `${level}-${index}`,
            type: sample(config.modes),
            question: word,
            variants: shuffle(variants)
          }
        })
      })
    )
  )

  if (+config.wordsLimit > 0) {
    return slice(data, 0, +config.wordsLimit)
  }

  return data
}
