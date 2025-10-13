import React, { useEffect } from "react";
import QuizStart from "./QuizStart";
import Progressbar from "./Progressbar";
import Timer from "./Timer";
import Questions from "./Questions";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import { sampleQuestions } from "../data/questions";
import { setQuestions } from "../store/quizSlice";

function Quiz() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuestions(sampleQuestions));
  }, [dispatch]);

  const {
    questions,
    currentQuestionIndex,
    isQuizFinished,
    isTimerActive,
    answers,
    timeLeft,
  } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (isQuizFinished) {
      console.log("Quiz finished (Redux flag true) — rendering Results");
    }
  }, [isQuizFinished]);


  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  if (isQuizFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
        <Results />
      </div>
    );
  }

  if (!isTimerActive && answers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <Progressbar
                currentQ={currentQuestionIndex + 1}
                totalQ={questions.length}
              />
            </div>
            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
}

export default Quiz;
