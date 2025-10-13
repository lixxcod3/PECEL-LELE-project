import { createSlice } from "@reduxjs/toolkit";

// to change time left in seconds
const time_value = 300; 

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  isQuizFinished: false,
  score: 0,
  timeLeft: time_value,
  isTimerActive: false,
  isShowExplanation: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    startQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.isQuizFinished = false;
      state.score = 0;
      state.timeLeft = time_value;
      state.isTimerActive = true;
      state.isShowExplanation = false;
    },

    answerQuestions: (state, action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect =
        action.payload.selectedOption === currentQuestion.correctAnswer;

      const answer = {
        questionNo: currentQuestion.no,
        selectedOption: action.payload.selectedOption,
        isCorrect,
      };

      state.answers.push(answer);

      if (isCorrect) {
        state.score += 1;
      }
      state.isShowExplanation = true;
    },

    nextQuestion: (state) => {
      state.isShowExplanation = false;
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isQuizFinished = true;
        state.isTimerActive = false;
      }
    },

    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;

        state.answers = state.answers.filter(
          (answer) =>
            answer.questionNo !== state.questions[state.currentQuestionIndex].no
        );

        state.isShowExplanation = false;


        state.score = state.answers.filter((answer) => answer.isCorrect).length;
      }
    },

    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.isQuizFinished = false;
      state.score = 0;
      state.timeLeft = time_value;
      state.isTimerActive = false;
      state.isShowExplanation = false;
    },

    decreamentTimer: (state) => {
      if (state.isQuizFinished) return;

      if (state.timeLeft > 0 && state.isTimerActive) {
        state.timeLeft -= 1;
      }


      if ((state.timeLeft <= 0 || !state.isTimerActive) && !state.isQuizFinished) {
        state.timeLeft = 0;
        state.isTimerActive = false;
        state.isQuizFinished = true;

        const answeredNos = state.answers.map((a) => a.questionNo);
        const unanswered = state.questions.filter((q) => !answeredNos.includes(q.no));

        unanswered.forEach((q) => {
          state.answers.push({
            questionNo: q.no,
            selectedOption: null,
            isCorrect: false,
          });
        });

        state.score = state.answers.filter((a) => a.isCorrect).length;
      }
    },
  },
});

export const {
  setQuestions,
  startQuiz,
  decreamentTimer,
  answerQuestions,
  nextQuestion,
  previousQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
