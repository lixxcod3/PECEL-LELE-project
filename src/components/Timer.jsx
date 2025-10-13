import { Clock } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreamentTimer } from "../store/quizSlice";

function Timer() {
  const dispatch = useDispatch();
  const { timeLeft, isTimerActive, isQuizFinished } = useSelector(
    (state) => state.quiz
  );
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isTimerActive && !isQuizFinished) {
      intervalRef.current = setInterval(() => {
        dispatch(decreamentTimer());
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [dispatch, isTimerActive, isQuizFinished]); // intentionally NOT watching timeLeft here

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Timer reached 00:00 - should finish quiz now");
    }
  }, [timeLeft]);

  // Change Timer Colors
  const changeTimerColor = () => {
    if (timeLeft > 60) return "text-green-600";
    else if (timeLeft > 10) return "text-yellow-600";
    return "text-red-600";
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${min.toString().padStart(2, 0)}:${secs
      .toString()
      .padStart(2, 0)}`;
  };

  return (
    <div className={`flex items-center space-x-2 ${changeTimerColor()}`}>
      <Clock size={20} />
      <span className="font-mono text-lg font-semibold">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}

export default Timer;
