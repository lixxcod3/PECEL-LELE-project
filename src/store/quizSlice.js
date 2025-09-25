import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    isQuizFinished: false,
    score: 0,
    timeLeft: 300,
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

        startQuiz: (state)=>{
            state.currentQuestionIndex = 0;
            state.answers = [];
            state.isQuizFinished = false;
            state.score = 0;
            state.timeLeft = 300;
            (state.isTimerActive = true), (state.isShowExplanation = false);
        },

        answerQuestions: (state, action) => {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            const isCorrect = action.payload.selectedOption === currentQuestion.correctAnswer;

            const answer = {
                questionNo: currentQuestion.no,
                selectedOption: action.payload.selectedOption,
                isCorrect
            };

            state.answers.push(answer)

            if(isCorrect){
                state.score += 1;
            }
            state.isShowExplanation = true;
        },

        nextQuestion: (state) => {
            state.isShowExplanation = false;
            if(state.currentQuestionIndex < state.questions.length -1){
                state.currentQuestionIndex += 1;
            }
            else{
                state.isQuizFinished = true;
                state.isTimerActive = false;
            }
        },

        previousQuestion: (state) => {
            if(state.currentQuestionIndex > 0){
                state.currentQuestionIndex -= 1;

                // Remove the answer for the current question if going back
                state.answers = state.answers.filter((answer) => answer.questionNo !== state.questions
            [state.currentQuestionIndex].no)

            state.isShowExplanation = false;

            // recalculate score
            state.score = state.answers.filter((answer) => answer.isCorrect).length
            }
        },

        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.answers = [];
            state.isQuizFinished = false;
            state.score = 0;
            state.timeLeft = 300;
            state.isTimerActive = false;
            state.isShowExplanation = false;
        },

        decreamentTimer: (state)=>{
            if(state.timeLeft > 0 && state.isTimerActive){
                state.timeLeft -= 1;
            }
            else if(state.timeLeft === 0){
                (state.isQuizFinished = true), (state.isTimerActive = false);
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

export default quizSlice.reducer
