import React from 'react';
import './App.css';
import { Score } from './features/board/score/Score';
import { Board } from './features/board/Board';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './features/board/boardSlice';


const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    dispatch(resetCards());
  };


  return (
    <div className="App">
      <Score />
      <Board />
      <footer>
        <button 
          onClick={startGameHandler}
          className="start-button">
          Start Game
        </button>
        <button
          onClick={tryAgainHandler}
          className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  )
};

export default App;
