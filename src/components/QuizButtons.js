import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'
import Button from './Button'

const QuizButtons = () => {
  const dispatch = useDispatch()
  const quizBegin = useSelector((store) => store.quiz.quizBegin)
  const quizOver = useSelector((store) => store.quiz.quizOver)
  // const showDetails = useSelector((store) => store.quiz.showDetails)
  const currentQuestionIndex = useSelector(
    (store) => store.quiz.currentQuestionIndex
  )

  const handleButtonPress = (props) => {
    dispatch(props)
  }

  return (
    <div className="buttons-container">
      {quizBegin === false && (
        <Button
          btnTxt="ENTER QUIZ"
          onClickAction={() => handleButtonPress(quiz.actions.startQuiz())}
          className="start-btn"
        />
      )}
      {currentQuestionIndex > 0 && quizOver === false && (
        <Button
          btnTxt="PREVIOUS"
          onClickAction={() => handleButtonPress(quiz.actions.goToPreviousQuestion())
          }
          className="btn"
        />
      )}
      {currentQuestionIndex < 4 && quizBegin === true && (
        <Button
          btnTxt="NEXT"
          onClickAction={() => handleButtonPress(quiz.actions.goToNextQuestion())
          }
          className="btn"
        />
      )}
      {currentQuestionIndex === 4 && quizOver === false && (
        <Button
          btnTxt="FINISH"
          onClickAction={() => handleButtonPress(quiz.actions.goToNextQuestion())
          }
          className="btn"
        />
      )}
      {quizOver === true && (
        <Button
          btnTxt="SHOW DETAILS"
          onClickAction={() => handleButtonPress(quiz.actions.showDetailedSummary())
          }
          className="btn"
        />
      )}
      {quizOver === true && (
        <Button
          btnTxt="RESTART"
          onClickAction={() => handleButtonPress(quiz.actions.restart())}
          className="btn"
        />
      )}
    </div>
  )
}

export default QuizButtons
