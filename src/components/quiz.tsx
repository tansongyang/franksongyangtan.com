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

type LocalStorageState = {
  answers: string[]
}

function defaultAnswers(props: Props) {
  return props.questions.map(() => '')
}

function defaultState(props: Props): State {
  return {
    answers: defaultAnswers(props),
    isActive: false,
    isSubmitted: false,
  }
}

function localStorageKey(name: string): string {
  return `quiz_${name}`
}

function getResponses(questions: Question[], answers: string[]) {
  return answers.map((answer, i) => {
    const { q: question, a: correctAnswer } = questions[i]
    return {
      answer,
      correctAnswer:
        typeof correctAnswer === 'string'
          ? correctAnswer
          : correctAnswer.join(', '),
      isCorrect:
        typeof correctAnswer === 'string'
          ? answer.trim().toLowerCase() === correctAnswer.toLowerCase()
          : correctAnswer
              .map(a => a.toLowerCase())
              .includes(answer.trim().toLowerCase()),
      question,
    }
  })
}

export default class Quiz extends React.Component<Props, State> {
  questionsRef?: HTMLElement

  constructor(props: Props) {
    super(props)

    this.state = defaultState(props)

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.recordAnswer = this.recordAnswer.bind(this)
    this.startOver = this.startOver.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    const state = this.restore()
    this.setState({ answers: state.answers })
  }

  close() {
    if (this.state.isSubmitted) {
      this.setState(defaultState(this.props))
    } else {
      this.setState({ isActive: false })
    }
  }

  open() {
    this.setState({ isActive: true, isSubmitted: false })
  }

  recordAnswer(index: number, event: React.ChangeEvent<HTMLInputElement>) {
    const answers = [...this.state.answers]
    answers[index] = event.target.value
    const state = { answers }
    this.setState(state)
    this.save(state)
  }

  restore(): LocalStorageState {
    const state = window.localStorage.getItem(localStorageKey(this.props.name))
    return state ? JSON.parse(state) : { answers: defaultAnswers(this.props) }
  }

  save(state: LocalStorageState) {
    window.localStorage.setItem(
      localStorageKey(this.props.name),
      JSON.stringify(state)
    )
  }

  startOver() {
    this.save({ answers: defaultAnswers(this.props) })
    this.setState({ ...defaultState(this.props), isActive: true }, () => {
      this.questionsRef.scrollTop = 0
    })
  }

  submit() {
    this.setState({ isActive: false, isSubmitted: true })
  }

  render() {
    const { props, state } = this
    const isInProgress = state.answers.some(a => !!a)
    const responses = state.isSubmitted
      ? getResponses(this.props.questions, this.state.answers)
      : []
    const correctResponses = state.isSubmitted
      ? responses.filter(r => r.isCorrect)
      : []
    const isPerfect = correctResponses.length === responses.length
    return (
      <span className={styles.container}>
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
                      <p>
                        You wrote:{' '}
                        <span className={styles.incorrect}>
                          {r.answer || '(blank)'}
                        </span>
                      </p>
                      <p>
                        Correct answer(s):{' '}
                        <span className={styles.correct}>
                          {r.correctAnswer}
                        </span>
                      </p>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </>
        </Modal>
        <Modal
          contentLabel={props.name}
          childrenRef={r => (this.questionsRef = r)}
          footer={
            <>
              <Button onClick={this.submit}>Submit</Button>
              <Button onClick={this.startOver}>Restart</Button>
            </>
          }
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
      </span>
    )
  }
}

export function QuizMdWrapper({ name, questions }) {
  return <Quiz name={name} questions={JSON.parse(questions)} />
}
