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
        <button>
          Start Game
        </button>
        <button>
          Try New Pair
        </button>
      </footer>
    </div>
  )
};

export default App;
