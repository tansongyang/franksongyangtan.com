import React from 'react'

import Button from './button'
import Modal from './modal'

const styles = require('./quiz.module.css')

type Question = {
  q: string
  a: string | string[]
}

type Props = {
  name: string
  questions: Question[]
}

type State = {
  answers: string[]
  isActive: boolean
  isSubmitted: boolean
}

function defaultState(props: Props): State {
  return {
    answers: props.questions.map(() => ''),
    isActive: false,
    isSubmitted: false,
  }
}

export default class Quiz extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = defaultState(props)

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.recordAnswer = this.recordAnswer.bind(this)
    this.submit = this.submit.bind(this)
  }

  open() {
    this.setState({ isActive: true, isSubmitted: false })
  }

  close() {
    if (this.state.isSubmitted) {
      this.setState(defaultState(this.props))
    } else {
      this.setState({ isActive: false })
    }
  }

  recordAnswer(index: number, event: React.ChangeEvent<HTMLInputElement>) {
    const answers = [...this.state.answers]
    answers[index] = event.target.value
    this.setState({ answers })
  }

  submit() {
    this.setState({ isActive: false, isSubmitted: true })
  }

  responses() {
    return this.state.answers.map((answer, i) => {
      const { q: question, a: correctAnswer } = this.props.questions[i]
      return {
        answer,
        correctAnswer:
          typeof correctAnswer === 'string'
            ? correctAnswer
            : correctAnswer.join(', '),
        isCorrect:
          typeof correctAnswer === 'string'
            ? answer.trim() === correctAnswer
            : correctAnswer.includes(answer.trim()),
        question,
      }
    })
  }

  render() {
    const { props, state } = this
    const isInProgress = state.answers.some(a => !!a)
    const responses = state.isSubmitted ? this.responses() : []
    const correctResponses = state.isSubmitted
      ? responses.filter(r => r.isCorrect)
      : []
    const isPerfect = correctResponses.length === responses.length
    return (
      <>
        <Button onClick={this.open}>
          {isInProgress ? 'Continue Quiz' : 'Start Quiz'}
        </Button>
        <Modal
          contentLabel={`Results: ${props.name}`}
          footer={<Button onClick={this.close}>OK</Button>}
          isOpen={state.isSubmitted}
          onRequestClose={this.close}
        >
          <>
            <p className={isPerfect ? styles.perfect : styles.summary}>
              {isPerfect
                ? 'Perfect!'
                : `${correctResponses.length}/${responses.length}`}
            </p>
            <ol>
              {responses.map((r, i) => (
                <li key={i}>
                  <p className={styles.question}>{r.question}</p>
                  {r.isCorrect ? (
                    <p className={styles.correct}>{r.answer}</p>
                  ) : (
                    <>
                      <p className={styles.incorrect}>
                        {r.answer || '(blank)'}
                      </p>
                      <p className={styles.correct}>{r.correctAnswer}</p>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </>
        </Modal>
        <Modal
          contentLabel={props.name}
          footer={<Button onClick={this.submit}>Submit</Button>}
          isOpen={state.isActive}
          onRequestClose={this.close}
        >
          <ol>
            {props.questions.map(({ q }, i) => (
              <li key={i}>
                <p>
                  <label>
                    <span className={styles.question}>{q}</span>
                    <input
                      className={styles.answer}
                      onChange={e => this.recordAnswer(i, e)}
                      type="text"
                      value={state.answers[i]}
                    />
                  </label>
                </p>
              </li>
            ))}
          </ol>
        </Modal>
      </>
    )
  }
}

export function QuizMdWrapper({ name, questions }) {
  return <Quiz name={name} questions={JSON.parse(questions)} />
}
